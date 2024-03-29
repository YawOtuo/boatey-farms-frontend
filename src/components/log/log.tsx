import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import LogModal from "./logModal";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { GetOneRecord, deleteRecordJSONOne } from "@/lib/api/record";
import { addMessage } from "@/lib/redux/reducers/messages";

const Log = (props) => {
  const params = useParams();
  const userSqlData = useSelector((state) => state?.users?.userSqlData);
  const router = useRouter();
  const {
    isLoading,
    error,
    data: record,
  } = useQuery(
    [`${params?.slug}-${params?.id}`],
    () => GetOneRecord(params?.id),
    {
      enabled: !!userSqlData?.farm_id,
    }
  );
  const refreshCount = useSelector((state) => state?.app.refresh);
  const dispatch = useDispatch();

  const [r, setR] = useState();
  useEffect(() => {
    if (props.label == "weight") {
      setR(record?.weight);
    }
    if (props.label == "vaccination_info") {
      setR(record?.vaccination_info);
    }
    if (props.label == "health_condition") {
      setR(record?.health_condition);
    }
    if (props.label == "remarks") {
      setR(record?.remarks);
    }
  }, [record]);

  useEffect(() => {}, [refreshCount]);

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        deleteRecordJSONOne(props.animalId, props.label, index)
          .then((res) => {
            router.push("/dashboard");
            dispatch(addMessage("Deleted Data"));
          })
          .catch((err) => console.log(err));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <Root>
      <div
        className="flex gap-3 items-center uppercase text-[#0FA958]
           font-bold ">
        {props.title}
        <LogModal icon="add" type={props.title} label={props.label} />
      </div>
      
      {r?.map((r, index) => (
        <LogI className="shadow-md flex justify-between" key={index}>
          <div>
            <p
              className="text-[#0FA958] text-xs 
                            text-wrap font-bold">
              {r["date"]}
            </p>

            <p
              className=" text-left text-sm "
              style={{
                lineHeight: "1.8",
              }}>
              {r["content"]}
            </p>
          </div>

          <div className="flex gap-1 lg:gap-4">
            <LogModal
              edit={true}
              icon="edit"
              index={index}
              type={props.title}
              label={props.label}
              data={r}
            />
            <button onClick={(e) => handleDelete(index)}>
              <MdOutlineDelete size={20} />
            </button>
          </div>
        </LogI>
      ))}
    </Root>
  );
};

const Root = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const LogI = styled("div", {
  paddingBlock: "1rem",
  paddingInline: "1rem",
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  alignItems: "center",
  backgroundColor: "",
  width: "100%",
  minHeight: "50px",
  "@media screen and (max-width:500px)": {
    paddingInline: "0.5rem",
    alignItems: "start",
    gap: "10px",
  },
});

export default Log;
