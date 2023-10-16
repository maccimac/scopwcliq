import axios from 'axios'
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { isClient} from '../store/user-store';
// import { _project, _setProject } from '../store/project-store';


export const Notification =({_notification, cb})=>{

    const api = global.config.API;
    // const project = useSelector(_project);
    

    const [attachmentType, set_attachmentType] = useState("deliverable")
    const [title, set_title] = useState("")
    const [body, set_body] = useState("")
    const [cta, set_cta] = useState(null)
    
    const [notification, set_notification] = useState(_notification)


    const titleOpts = {
        'STATUS_UPDATE' : {
            COMPLETE: `✅ ${attachmentType} has been completed`,
            INCOMPLETE: `⚪️ Hmm.  A ${attachmentType} has been marked incompleted`,
            CANCELLED: `❌  ${attachmentType} cancelled`,
            DELETED: ` 🗑  ${attachmentType} deleted`,
        },
        'INVOICE':{
            SENT: '📬 Invoice has been sent',
            PAID: '💸 Invoice has been paid',
            VOID: '❌ Invoice is voided'
        },
        'CHANGE':{
            'MADE': `✏️ ${attachmentType} has been changed`,
        }
    }
    const resolveTitle = () => {
        if(notification.deliverable_id){
            //
            set_attachmentType('deliverable')
           
        }else if(notification.milestone_id){
            //
        }else if(notification.project_id){
            //
        }
        set_title(titleOpts[notification.type][notification.status])
    }
    const resolveCta = () => {
        switch(notification.type){
            case 'INVOICE':
                set_cta({
                    label: "label",
                    action: ()=>{}
                })
                break;
            default:
                break;
        }
    }
    
    const exit = () => {}

    useEffect(()=>{
        resolveTitle()
        resolveCta()
    }, [_notification])
    
    return(
        <div className={
            `sq-notification p-3 rounded sq-outter-shadow mb-3
                 ${notification.type == 'STATUS_UPDATE' && 'bg-sq-green-light' }
                 ${notification.type == 'INVOICE' && 'bg-sq-lav-light' }
                 ${notification.type == 'CHANGE' && 'bg-sq-gold-lightest' }
            `}>
            <div className='d-flex notification-header justify-content-between mb-2'>
                    <div className={`title text-capitalize

                    ${notification.type == 'STATUS_UPDATE' && 'text-color-sq-green-mid' }
                    ${notification.type == 'INVOICE' && 'text-color-sq-lav-mid' }
                    ${notification.type == 'CHANGE' && 'text-color-sq-gold-mid' }
            
               `}>{title}</div>
                    <i class="btn-notif-exit fa-solid fa-regular fa-xmark fa-md m-1 sq-btn-icon text-color-sq-med" onClick={exit}></i>
            </div>
            <div className='notification-body'>
                <p>This status is for <strong>{notification.description}</strong>.</p>
            </div>
            {cta &&
                (<div className='notification-footer d-flex mt-3'>
                    <div className={`
                        sq-btn
                        ${notification.type == 'STATUS_UPDATE' && 'bg-sq-green' }
                        ${notification.type == 'INVOICE' && 'bg-sq-lav' }
                        ${notification.type == 'CHANGE' && 'bg-sq-gold' }
                    `}>
                        Approve
                    </div>
                </div>)
            }
        </div>
    )
}

export default Notification;