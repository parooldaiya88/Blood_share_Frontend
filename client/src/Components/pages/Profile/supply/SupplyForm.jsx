import React, { useContext } from "react";
import { Form, Modal, Radio, Input, message } from "antd";
import { supplyInputValidation } from "../../../../utils/helpers.js";
import { AddSupply } from "../../../../apiCalls/supplyApi.js";
import { DataContext } from "../../../../reducer/context.js";


//SupplyForm is shown inside Supply.jsx which is also part of organization profile
const SupplyForm = ({ reload }) => {
  const [form] = Form.useForm();
  const {
    dispatchLoader,
    open,
    setOpen,
    userState,
    supplyType,
    setSupplyType,
  } = useContext(DataContext);

  const { currentUser } = userState;

  const onFinish = async (values) => {
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      //console.log(values);
      const response = await AddSupply({
        ...values,
        supplyType,
        organization: currentUser._id,
      });
      console.log(response);
      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
        reload();
        message.success("Supply Entry Added Successfully");
        setOpen(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message); //!customize error message here
      dispatchLoader({ type: "Set_Loading", payload: false });
    }
  };
  return (
    <Modal
      title='ADD BLOODSUPPLY'
      open={open}
      
      onCancel={() => setOpen(false)}
      centered
      onOk={() => {
        form.submit();
      }}
    >
      <Form
        layout='vertical'
        className='flex flex-col gap-3'
        form={form}
        onFinish={onFinish}
      >
        <Form.Item label='Supply Type'>
          <Radio.Group
            value={supplyType}
            onChange={(e) => setSupplyType(e.target.value)}
          >
            <Radio value='in'>In</Radio>
            <Radio value='out'>Out</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label='Blood Group'
          name='bloodGroup'
          rules={supplyInputValidation()}
          
        >
          <select name='' id='' className="p-2 border-none">
            <option value=''>Blood Type</option>
            <option value='a+'>A+</option>
            <option value='a-'>A-</option>
            <option value='b+'>B+</option>
            <option value='b-'>B-</option>
            <option value='ab+'>AB+</option>
            <option value='ab-'>AB-</option>
            <option value='o+'>O+</option>
            <option value='o-'>O-</option>
          </select>
        </Form.Item>

        <Form.Item
          label={supplyType === "out" ? "Hospital Email" : "Donor Email"}
          name='email'
          rules={supplyInputValidation()}
          
        >
          <Input type='email' className="p-2 " />
        </Form.Item>

        <Form.Item
          label='Quantity (ML)'
          name='quantity'
          rules={supplyInputValidation()}
        >
          <Input type='number' className="p-2 " />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SupplyForm;
