"use client";
import React, { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import axios from "axios";
import { SelectSireModal } from "../select-sire-modal";
import { useSelector, useDispatch } from "react-redux";
import { url } from "../../../weburl";
import { addMessage } from "@/lib/redux/reducers/messages";
import { LoadingModal } from "../loading-modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddRecord, GetOneRecord, updateRecord } from "@/lib/api/record";
import { IoAddCircleOutline } from "react-icons/io5";
import { Form, Formik } from "formik";
import CustomRadioInput from "../CustomRadioInput";
import CustomSwitch from "../CustomSwitch";
import { today } from "@/lib/utils/date";
import CustomSelect from "../CustomSelect";
import useNotifications from "@/lib/hooks/useNotifications";
import useRecordFormSubmission from "./useRecordFormSubmission";
import { Record } from "@/lib/types/record";
import { Button } from "../ui/button";
import IconButton from "../IconButton";
import CustomModal from "../ui/CustomDialog";
import CustomInput from "../ui/CustomInput";
import CustomTextArea from "../ui/CustomTextArea";
const addIcon = "/icons/add.png";
const editIcon = "/icons/edit.png";

type Props = {
  edit?: boolean;
  record?: any;
  type?: string;
  title?: string;
};
export default function AddRecordModal({ edit, record, type, title }: Props) {
  const [open, setOpen] = React.useState(false);

  const [sire, setSire] = useState<Record>();
  const [dam, setDam] = useState<Record>();
  const [otherData, setOtherData] = useState({ gender: "male", type: "sheep" });
  const { handleSubmit } = useRecordFormSubmission({
    edit,
    otherData,
    setOpen,
    dam,
    sire,
    record,
    type,
  });

  const {
    isLoading: isLoadingSire,
    error: errorSire,
    data: sire_,
  } = useQuery(
    [`${record?.type}-${record?.sire}`],
    () => GetOneRecord(record?.sire),
    {
      enabled: !!record?.sire,
    }
  );
  const {
    isLoading: isLoadingDam,
    error: errorDam,
    data: dam_,
  } = useQuery(
    [`${record?.slug}-${record?.dam}`],
    () => GetOneRecord(record?.dam),
    {
      enabled: !!record?.sire,
    }
  );

  useEffect(() => {
    if (sire_) {
      setSire(sire_);
    }
    if (dam_) {
      setDam(dam_);
    }
  }, [sire_, dam_]);

  return (
    <div>
      <CustomModal
        onOpenChange={setOpen}
        open={open}
        trigger={
          <Button>
            {edit ? (
              <img src={editIcon} width="90%" />
            ) : (
              <div className="flex gap-1 items-center">
                <p className="whitespace-nowrap">{title}</p>{" "}
              </div>
            )}
          </Button>
        }
        size={"7xl"}
        body={
          <Formik
            initialValues={{
              ...record,
            }}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
            }}>
            {({ handleSubmit, handleReset, values, errors, handleChange }) => (
              <Form>
                {edit ? "EDIT RECORD" : `NEW RECORD ${type ? type : ""}`}
                <div className="pt-4 text-black grid grid-cols-1 lg:grid-cols-3 gap-5">
                  <div className=" flex flex-col gap-5">
                    <CustomInput
                      label={"tag name"}
                      type="text"
                      name="name"
                      required={true}
                      onChange={handleChange}
                      value={values.name}
                    />

                    <CustomInput
                      label={"tag colour"}
                      type="text"
                      name="tag_colour"
                      onChange={handleChange}
                      value={values.tag_colour}
                    />

                    <CustomInput
                      label={"colour"}
                      name="colour"
                      type="text"
                      onChange={handleChange}
                      value={values.colour}
                    />

                    <CustomInput
                      label={"number of kids"}
                      name="number_of_kids"
                      type="number"
                      onChange={handleChange}
                      value={values.number_of_kids}
                    />

                    <CustomInput
                      label={"date of birth"}
                      name="date_of_birth"
                      type="date"
                      onChange={handleChange}
                      value={values.date_of_birth}
                    />
                  </div>
                  <div className="flex flex-col  gap-5">
                    <div className="flex flex-row gap-10 text-black">
                      <div className="">
                        Sire {sire?.name}
                        <SelectSireModal
                          setParent={setSire}
                          type={type}
                          name="sire"
                        />
                      </div>

                      <div>
                        Dam {dam?.name}
                        <SelectSireModal
                          setParent={setDam}
                          type={type}
                          name="dam"
                        />
                      </div>
                    </div>

                    {!edit && (
                      <CustomInput
                        label={"weight"}
                        name="weight"
                        type="number"
                        onChange={handleChange}
                        value={values.weight}
                      />
                    )}
                    {!edit && (
                      <div className="mb-5">
                        {" "}
                        <CustomTextArea
                          label={"Vaccination info"}
                          placeholder="Vaccination Info"
                          onChange={handleChange}
                          initialValue={values.vaccination_info}
                        />
                      </div>
                    )}

                    {!edit && (
                      <CustomTextArea
                        label={"health condition"}
                        onChange={handleChange}
                        initialValue={values.health_condition}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-5">
                    <CustomRadioInput
                      defaultValue="sheep"
                      onChange={setOtherData}
                      title="type"
                      data={[
                        {
                          label: "sheep",
                          value: "sheep",
                        },
                        {
                          label: "goat",
                          value: "goat",
                        },
                        {
                          label: "cattle",
                          value: "cattle",
                        },
                      ]}
                    />

                    <CustomRadioInput
                      defaultValue="male"
                      onChange={setOtherData}
                      title="gender"
                      data={[
                        {
                          label: "male",
                          value: "male",
                        },
                        {
                          label: "female",
                          value: "female",
                        },
                      ]}
                    />
                    <CustomRadioInput
                      onChange={setOtherData}
                      title="castrated"
                      data={[
                        {
                          label: "yes",
                          value: "yes",
                        },
                        {
                          label: "no",
                          value: "no",
                        },
                      ]}
                    />

                    <CustomSwitch label="alive" onChange={setOtherData} />

                    {!edit && (
                      <CustomTextArea
                        label={"Remarks"}
                        placeholder="Any extra info"
                        onChange={handleChange}
                        initialValue={values.remarks}
                      />
                    )}
                  </div>
                </div>
                <div className="w-full text-center mt-5 rounded-lg bg-green1 ">
                  <Button type="submit" className="w-full">
                    <span className="text-white">{edit ? "EDIT" : "ADD"}</span>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        }
      />
    </div>
  );
}
