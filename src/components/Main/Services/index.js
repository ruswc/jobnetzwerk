import React from 'react'

import news2 from 'img/vector/news2.svg'
import jobagent2 from 'img/vector/jobagent2.svg'
import notebook2 from 'img/vector/notebook2.svg'
import date2 from 'img/vector/date2.svg'
import mediator2 from 'img/vector/mediator2.svg'
import support2 from 'img/vector/support2.svg'
import ServiceContainer from './ServiceContainer'
import ServiceLogo from './ServiceLogo'

const Services = () => (
  <div className="container-fluid my-4 pl-md-0">
    <ServiceContainer
      logo={<ServiceLogo logo={news2} header="Nachrichten" />}
      text={
        <p className="text-body">
          Your messsage center for applying jobs with the help of{' '}
          <a href="#home"> text moduls </a> and receiving mails from your
          consultant or future employers! You have{' '}
          <a href="#home">3 unread messages</a>.
        </p>
      }
    />

    <ServiceContainer
      logo={<ServiceLogo logo={jobagent2} header="Jobagent" />}
      text={
        <p className="text-body">
          <a href="#home">Browse</a> matching job ads depending on your chosen
          criterias. Add job ads which interests you on your notepad to manage
          your applications!{' '}
          <a href="#home">Change your job matching criterias</a> at your
          applicant proﬁle for better results!
        </p>
      }
    />

    <ServiceContainer
      logo={<ServiceLogo logo={notebook2} header="Notizbuch" />}
      text={
        <p className="text-body">
          Organize you aded job ads on <a href="#home">your notepad</a>!
          Document your complete application process for a job ad and add your
          apontments to you calender. After the application process you can
          archiv your applications!
        </p>
      }
    />

    <ServiceContainer
      logo={<ServiceLogo logo={date2} header="Termine" />}
      text={
        <p className="text-body">
          <a href="#home">View your calender</a> directly to see your
          application appointments on time (and eventually get notiﬁcations for
          your upcoming appointments.)
        </p>
      }
    />

    <ServiceContainer
      logo={<ServiceLogo logo={mediator2} header="Dein Vermittler" />}
      text={
        <p className="text-body">
          Your consultant during your applications is Max Musterfrau. Keep her
          on track with your documentations and don‘t hesitate to ask for help
          by <a href="#home">email</a> or <a href="#home">instant message.</a>{' '}
          Your consultant is always there for you!
        </p>
      }
    />

    <ServiceContainer
      logo={<ServiceLogo logo={support2} header="Support" />}
      text={
        <p className="text-body">
          If you have any technical problems don‘t hesitate to{' '}
          <a href="#home">write</a> to our developers! We are always working on
          to improve our services for you!
        </p>
      }
    />
  </div>
)

export default Services
