import styled from 'styled-components'
// import { Button } from 'antd'

const LayoutSteps = styled.div`
    margin: auto;
    max-width: 90vw;
    width: 640px;

    margin-bottom: 12px;
`
const LayoutButton = styled.div`
    margin: auto;
    max-width: 90vw;
    width: 640px;
`

const CardForm = styled.div`
    -webkit-transition: background-color 200ms cubic-bezier(0,0,0.2,1);
    transition: background-color 200ms cubic-bezier(0,0,0.2,1);
    background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 24px;
    page-break-inside: avoid;
    word-wrap: break-word;
`

const LayoutForm = styled.div`
    margin: auto;
    max-width: 90vw;
    width: 640px;
    .ant-upload-picture-card-wrapper {
        text-align: center;
    }
`

export {
    LayoutForm,
    CardForm,
    LayoutButton,
    LayoutSteps
}