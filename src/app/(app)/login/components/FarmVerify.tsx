import { CustomTextField } from "@/components/CustomTextfield";
import { CustomLoaders } from "@/components/Loaders";
import { VerifyFarmExists } from "@/lib/api/farm";
import { setFarmDetails } from "@/lib/redux/reducers/farm";
import { Button, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  onSuccess: Dispatch<SetStateAction<number>>;
  page: string
};
function FarmVerify({ onSuccess, page }: Props) {
  const queryClient = useQueryClient();
  const [success, setSuccess] = useState<boolean>();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = async (name) => {
    setLoading(true);
    setSuccess(undefined);
    const result: Promise<any> = await VerifyFarmExists(name);

    if (!result?.id) {
      console.log(result);
      setSuccess(false);
      console.log("faiiled");
      setLoading(false);
    }
    if (result?.id) {
      console.log(result);
      console.log("success");
      dispatch(setFarmDetails(result));
      setSuccess(true);
      setLoading(false);
      onSuccess((prev) => 1);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          handleSubmit(values?.farm_name);
        }}>
        {({ handleSubmit, handleBlur, values, errors, handleChange }) => (
          <Form className="flex flex-col gap-5">
            <div className="flex flex-col  gap-5">
              <TextField
                className="w-full"
                label="FARM NAME"
                name="farm_name"
                required={true}
                onChange={(e) => {
                  handleChange(e);
                  setSuccess(undefined);
                }}
                value={values.farm_name}
              />
              {loading && (
                <CustomLoaders variant="syncloader" colour="green1" />
              )}
              {success == false && (
                <p className="text-sm text-red-400 ">
                  No farm with this name found
                </p>
              )}
              {success && <p className="text-sm text-green1 ">Verified!!!</p>}
            </div>

            {!loading && (
              <Button
                type="submit"
                className="!bg-green1 h-[52px] !text-white w-full font-bold hover:!bg-green1">
                PROCEED
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FarmVerify;
