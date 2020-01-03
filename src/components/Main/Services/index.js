import React from "react"
import {ServiceLogo} from "./ServiceLogo"
import {ServiceContainer} from "./ServiceContainer"

import dialog from "img/vector/dialog.svg"
import briefcase2 from "img/vector/briefcase2.svg"
import target2 from "img/vector/target2.svg"
import calendar2 from "img/vector/calendar2.svg"
import people from "img/vector/people.svg"
import callcenter from "img/vector/callcenter.svg"

export const Services = () => (
    <div className='container-fluid my-4 pl-md-0'>
        <ServiceContainer
            logo={
                <ServiceLogo
                    logo={dialog}
                    header="Nachrichten"
                />
            }
            text={
                <p className="text-body">
                    Your messsage center for applying jobs with the help of <a href='#'> text moduls </a> and receiving mails from your consultant or future employers! You have <a href='#'>3 unread messages</a>.
                </p>
            }
        />

        <ServiceContainer
            logo={
                <ServiceLogo
                    logo={briefcase2}
                    header="Nachrichten"
                />
            }
            text={
                <p className="text-body">
                    <a href='#'>Browse</a> matching job ads depending on your chosen criterias. Add job ads which interests you on your notepad to manage your applications! <a href='#'>Change your job matching criterias</a> at your applicant proﬁle for better results!
                </p>
            }
        />

        <ServiceContainer
            logo={
                <ServiceLogo
                    logo={target2}
                    header="Notizbuch"
                />
            }
            text={
                <p className="text-body">
                    Organize you aded job ads on <a href='#'>your notepad</a>! Document your complete application process for a job ad and add your apontments to you calender. After the application process you can archiv your applications!

                </p>
            }
        />

        <ServiceContainer
            logo={
                <ServiceLogo
                    logo={calendar2}
                    header="Termine"
                />
            }
            text={
                <p className="text-body">
                    <a href="#">View your calender</a> directly to see your application appointments on time (and eventually get notiﬁcations for your upcoming appointments.)
                </p>
            }
        />

        <ServiceContainer
            logo={
                <ServiceLogo
                    logo={people}
                    header="Dein Vermittler"
                />
            }
            text={
                <p className="text-body">
                    Your consultant during your applications is Max Musterfrau. Keep her on track with your documentations and don‘t hesitate to ask for help by <a href="#">email</a> or <a href="#">instant message.</a> Your consultant is always there for you!
                </p>
            }
        />

        <ServiceContainer
            logo={
                <ServiceLogo
                    logo={callcenter}
                    header="Support"
                />
            }
            text={
                <p className="text-body">
                    If you have any technical problems don‘t hesitate to <a href="#">write</a> to our developers! We are always working on to improve our services for you!
                </p>
            }
        />
    </div>

)
