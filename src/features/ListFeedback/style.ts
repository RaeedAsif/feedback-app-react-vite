import styled from "styled-components"

export const PageWrapper = styled.div`
    height: 100%;
    background-color: #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardWrapper = styled.div`
    background: #e8e8e8;
    border-radius: 12px;
    width: 1400px;
    display: flex;
    flex-direction: column;
    
    & .card_header {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        
        & .header_row{
            width: 100%;
            display: flex;
            flex-direction: row;

            & svg {
                color: #7878bd;
                margin-right: 10px;
                margin-top:18px;
                height: 52px;
                width: 52px;
            }
        }
        & .form_heading {
            padding-bottom: 5px;
            font-size: 32px;
            color: #7878bd;
        }

        & .header_select{
            width:180px;
            & select {
                padding: 14px 20px;
                width: 100%;
                border: none;
            }
            margin-right:30px;
        }

        & .header_button{
            border-radius: 85px;

            & button{
                width:100%;
                height:100%;
                border: none;
                cursor: pointer;
                border-radius: 25px;
                background: #e8e8e8;
                box-shadow:  20px 20px 60px #7878bd,
                             -20px -20px 60px #ffffff;
            
            :hover {
                box-shadow: 0 12px 16px 0 #7878bd, 0 17px 50px 0 #7878bd;
            }
            & svg {
                color: #7878bd;
                height: 38px;
                width: 38px;
            }
        }
        }
    }

    & .card_body{
        width:100%;
        box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
        -webkit-box-shadow: 10px 10px 64px 0px rgba(186, 186, 202, 0.75);
        -moz-box-shadow: 10px 10px 64px 0px rgba(208, 208, 231, 0.75);
        border-radius: 1rem;
        height:700px;
        overflow: scroll;


        & .loader{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 250px;
        }

        & .no-data{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 250px;

            & p{
                color: #7878bd
            }

            & button{
                padding: 14px;
                cursor: pointer;
            }

            & div{
                width: 200px;
            }
        }
    }

    & .body_table{
        background-color: #ffffff;
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9rem;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        
        & thead tr{
            font-size: 20px;
            inset-block-start: 0;
            position: sticky;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            background-color: #7878bd;
            color: #ffffff;
            text-align: left;
            font-weight: bold;
            & th{
                padding: 30px 15px;
            }
            & td{
                padding: 12px 15px;
            }
        }

        & tbody tr{
            border-bottom: 1px solid #dddddd;
            :nth-of-type(even){
                background-color: #f3f3f3;
            }
            :last-of-type{
                background-bottom: 2px solid #7878bd;
            }
            & td{
                padding: 30px 15px;
                :nth-child(1){
                    width: 15%;
                }
                :nth-child(2){
                    width: 15%;
                    border-left: 2px solid #f8f6ff;
                    
                }
                :nth-child(3){
                    width: 15%;
                    border-left: 2px solid #f8f6ff;
                }
                :nth-child(4){
                    width: 55%;
                    border-left: 2px solid #f8f6ff;
                }
            }
        }
    }

    & .card_foot{
        display: flex;
        justify-content:center;
        align-items:center;
        & .foot_buttons{
            display: flex;
            justify-content:center;
            align-items:center;
            flex-direction: row;
            column-gap: 12px;
            padding: 20px;
            max-width:300px;
            & button {
                padding: 8px 12px;
                cursor: pointer;
            }
        }
        
    }
`
