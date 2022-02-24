import React, { FC } from 'react';

import "./StaffCard.sass";
import {ReactSVG} from "react-svg";

import ITeacher from "../../interfaces/teacher";

// @ts-ignore
import emailSvg from "../../assets/svgs/email.svg";
// @ts-ignore
import phoneSvg from "../../assets/svgs/phone.svg";
// @ts-ignore
import websiteSvg from "../../assets/svgs/website.svg";
// @ts-ignore
import linkedinSvg from "../../assets/svgs/linkedin.svg";
// @ts-ignore
import vkSvg from "../../assets/svgs/vk.svg";
// @ts-ignore
import twitterSvg from "../../assets/svgs/twitter.svg";
// @ts-ignore
import imgg from "../../assets/image1.jpg";

interface IStaffCardProps {
    teacher: ITeacher
}

const StaffCard: FC<IStaffCardProps> = ({
    teacher
    }) => {
    const {
        photoPath,
        fullName,
        email,
        phone,
        website,
        linkedin,
        vk,
        twitter,
        post,
        degree,
        about,
        disciplines
    }: ITeacher = teacher;

    return (
        <div className="staff-card">
             <div className="staff-card__left">
                 <div className="teacher-photo">
                     {/*<img src={photoPath} alt={fullName} />*/}
                     <img src={imgg} alt="asdsa"/>
                 </div>
                 <div className="teacher-contacts">
                     {
                         email !== undefined ?
                             <div className="teacher-contact">
                                 <ReactSVG src={emailSvg} />
                                 <span>{email}</span>
                             </div>
                             : null
                     }
                     {
                         phone !== undefined ?
                             <div className="teacher-contact">
                                 <ReactSVG src={phoneSvg} />
                                 <span>{phone}</span>
                             </div>
                             : null
                     }
                     {
                         website !== undefined ?
                             <div className="teacher-contact">
                                 <ReactSVG src={websiteSvg} />
                                 <span>{website}</span>
                             </div>
                             : null
                     }
                     {
                         linkedin !== undefined ?
                             <div className="teacher-contact">
                                 <ReactSVG src={linkedinSvg} />
                                 <span>{linkedin}</span>
                             </div>
                             : null
                     }
                     {
                         vk !== undefined ?
                             <div className="teacher-contact">
                                 <ReactSVG src={vkSvg} />
                                 <span>{vk}</span>
                             </div>
                             : null
                     }
                     {
                         twitter !== undefined ?
                             <div className="teacher-contact">
                                 <ReactSVG src={twitterSvg} />
                                 <span>{twitter}</span>
                             </div>
                             : null
                     }
                 </div>
             </div>
            <div className="staff-card__right">
                <span className="teacher-fullname">
                    {fullName}
                </span>
                <div className="teacher-status">
                    <span className="teacher-post">{post}</span>
                    {
                        degree !== undefined ?
                            <>
                                ,&nbsp;
                                <span className="teacher-degree">{degree}</span>
                            </> :
                            null
                    }
                </div>
                <div className="teacher-about">{about}</div>
                {
                    disciplines !== undefined ?
                        <div className="teacher-disciplines">
                            <span className="teacher-disciplines__title">Преподаваемые дисциплины</span>
                            <ul className="teacher-disciplines__list">
                                {
                                    disciplines?.map((discipline) =>
                                        <li>{discipline.name}</li>
                                    )
                                }
                            </ul>
                        </div> :
                        null
                }
            </div>
        </div>
    );
};

export default StaffCard;