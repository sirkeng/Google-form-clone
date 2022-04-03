import React, { useState, useRef } from "react"
import { Steps, Button, message, Upload, Modal, Image } from 'antd'
import { Formik } from 'formik'
import { Form, Radio, Select, DatePicker, Input } from 'formik-antd'
import { PlusOutlined } from '@ant-design/icons'
import moment from 'moment'
import * as Yup from 'yup'


import { LayoutForm, CardForm, LayoutButton, LayoutSteps } from './GoogleFormStyles'
import { useDocumentTitle } from '../../utils'
import countrys from '../../utils/country-list-th.json'

const { Step } = Steps

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
}

const initValuesFrom = {
  birthday: null,
  country: null,
  name: null,
  type: null
}

const GoogleForm = ({ title }) => {
  useDocumentTitle(title)

  const formRef = useRef()
  const [formValues, setFormValues] = useState(initValuesFrom)
  const [fileList, setFileList] = useState([])
  const [uploadFile, setUploadFile] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: ''
  })
  const [current, setCurrent] = useState(0)

    const handleOnSubmit = (values) => {
      console.log('handleOnSubmit--->',values, fileList)
      setFormValues({ birthday: moment(values.birthday).format('YYYY-MM-DD'), country: values.country, name: values.name, type: values.type })
    }

    const handleCancel = () => setUploadFile({ previewVisible: false })


    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      // console.log('fileList--->', file)
      setUploadFile({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      })
    }

    const handleChange = ({ fileList }) => setFileList(fileList)

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    )


    const { previewVisible, previewImage, previewTitle } = uploadFile
      // console.log('uploadFile', formValues)
    const steps = [
        {
          title: 'Add',
          content: 
          <LayoutForm>
            <Formik 
                initialValues={{}}
                // validationSchema={ValidateSchemaForm}
                onSubmit={handleOnSubmit}
                innerRef={formRef}
            >
              <Form autoComplete="off">
                <CardForm>
                  <Form.Item name='name' label={'ชื่อน้องแมว'}>
                    <Input name="name" defaultValue={formValues.name} />
                  </Form.Item>
                </CardForm>
                <CardForm>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                    <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                </CardForm>

                <CardForm>
                  <Form.Item name='type' label={'สายพันธ์'}>
                    <Radio.Group name="type" defaultValue={formValues.type}>
                      <Radio.Button value="สีสวาด">สีสวาด</Radio.Button>
                      <Radio.Button value="เปอร์เซีย">เปอร์เซีย</Radio.Button>
                      <Radio.Button value="บริติช ชอร์ตแฮร์">บริติช ชอร์ตแฮร์</Radio.Button>
                      <Radio.Button value="อเมริกัน ชอร์ตแฮร์">อเมริกัน ชอร์ตแฮร์</Radio.Button>
                      <Radio.Button value="สก็อตติช โฟลด์">สก็อตติช โฟลด์</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </CardForm>

                <CardForm>
                  <Form.Item name='country' label={'ประเทศอาศัยน้องแมว'}>
                    <Select name={'country'} optionFilterProp="children" showSearch allowClear defaultValue={formValues.country}>
                        {
                            countrys.map((value, index) => {
                                return <Select.Option key={index} value={value.name}>{value.name}</Select.Option>
                            })
                        }
                    </Select>
                  </Form.Item>
                </CardForm>

                <CardForm>
                <Form.Item name='birthday' label={'วันเกิดน้องแมว'}>
                  <DatePicker
                      defaultValue={(formValues.birthday) && moment(formValues.birthday)}
                      name="birthday"
                      allowClear
                      placeholder="dd/mm/yyyy"
                      format="DD/MM/YYYY"
                  />
                </Form.Item>
                </CardForm>

              </Form>
            </Formik>
          </LayoutForm>,
        },
        {
          title: 'Confirm',
          content:
          <LayoutForm>
            <CardForm>
              ชื่อน้อแมว: {formValues.name}
              <br />
              สายพันธ์: {formValues.type}
              <br />
              ประเทศอาศัยน้องแมว: {formValues.country}
              <br />
              วันเกิดน้องแมว: {moment(formValues.birthday).format('DD/MM/YYYY')}
              <br />
              {fileList.map((value, index) => {
                // console.log('value--->', value)
                  return <Image
                    width={200}
                    src={value.thumbUrl}
                  />
              })}
            </CardForm>
          </LayoutForm>,
        }
      ]
      
        const confirm = () => {
          setFormValues(initValuesFrom)
          setCurrent(0)
          setFileList([])
          // formRef.current.resetForm()
          message.success('Processing complete!')
        }

        const next = () => {
          formRef.current.submitForm()
          setCurrent(current + 1)
        }
      
        const prev = () => {
          setCurrent(current - 1)
        }
      
        return (
          <>
            <LayoutSteps>
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            </LayoutSteps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              <LayoutButton>
              {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => next()}>
                    Submit
                  </Button>
              )}
              {current === steps.length - 1 && (
                  <Button type="primary" onClick={() => confirm()}>
                    Confirm
                  </Button>
              )}
              {current > 0 && (
                  <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                  </Button>
              )}
              </LayoutButton>
            </div>
          </>
        );
}

export default GoogleForm