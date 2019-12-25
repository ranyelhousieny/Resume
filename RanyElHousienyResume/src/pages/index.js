import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          Commercial software development expert offering 15+ years’ managing cross-functional, global teams. Develops underperforming teams to have the ability to ship complex product releases significantly ahead of schedule.  
          Designed and implemented products used by 500M+ users Cross Platforms.  
          Gold Star Award Winner presented from VP of Microsoft for saving failing projects, moving them from failed to shipped with high quality, and Increasing products deployment speed by 70%.  
          Known and awarded for building high-performing teams. 
          Awarded from the BOD of APFM for the high impact in the first 3 months.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">SOFTWARE ENGINEERING MANAGER</h3>
              <div className="subheading mb-3">A Place For Mom</div>
              <p>
              Designing, Developing, and Managing 7 main cloud distributed solutions with cross platform mobile apps using ASP.NET Core, REDIS, 
              Elastic Search, Apache Cordova, Microsoft SQL Server, T-SQL, AWS, Kinesis, React, Gatsby, Xamarin ...
              In the first 3 months, I was awarded from the board of directors for impacting the company positively by:
              <ul>
                <li>Improving performance by 27% leading to 40% resource savings</li>
                <li>Saving over 1400 hours per month of manual labor by automating complicated tasks</li>
              </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">PRINCIPLE SOFTWARE ENGINEERING MANAGER</h3>
              <div className="subheading mb-3">Microsoft : Microsoft Azure – Cloud Data, and AI </div>
              <p>
              <ul>
              <li>Azure Unified Endpoint Management (UEM) Microservices: Improved customer experience for managing apple devices enrolled in Apple Deployment Program and managed by Microsoft Intune by 10%.</li>
              <li>Lead several cross-organizational initiatives within 11k employee organization to improve experiences and satisfaction for  500M+ end-users.. </li>
              <li>Lead ARM64 development; game changing, all-day battery device with continuous connectivity and new mobile CPU announced on Dec. 2017.  </li>
              <li>Increased NPS (Net Promoter Score) and Customer satisfaction by 5% for 100M+ enterprise customers by creating a customer satisfaction dashboard and equation measuring by multiple factors.</li>
              <li>Reduced customer support volume 3% (projection is 25% in 2 years); developed Machine Learning model identifying user feedback issues to alert engineers of new issues, decreasing resolution time and saving $18k/mo in labor costs.</li>
              <li>Reduced the MTTR (mean time to resolution) to 12% (projection is 50% in 2 years) which increased adoption to latest release by 5%. </li>
              </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2016 - October 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">SENIOR SOFTWARE ENGINEERING MANAGER</h3>
              <div className="subheading mb-3">Microsoft : Microsoft Office for Apple platforms (iOS / OSX) </div>
              <p>
                <ul>
                <li>Released <a href="https://www.microsoft.com/en-us/microsoft-365/blog/2014/03/27/announcing-the-office-you-love-now-on-the-ipad/">Office for iPad</a> , iPhone, and Mac -announced by Satya on March 2014.</li>
                <li>
                Designed and implemented features used by 100M+ users: linking to <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-authentication-libraries">ADAL</a> (Azure Active Directory Authentication Library) for client authentication with Office365, Single Sign On, Third party Authentication (Box, Dropbox, iCloud), and OAuth2 Authentication. 
                </li>
                <li>Created a combined engineering transition process pilot used as a blueprint by 10K+ employees.</li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2013 - October 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">GROUP MANAGER</h3>
              <div className="subheading mb-3">Microsoft : Microsoft Research (MSR)</div>
              <p>
              <ul>
              <li>Managed an org of developers, test, and product managers in MSR (Microsoft Research) to ship products.</li>
              <li>Awarded and promoted for creating a reliable process guaranteeing continuous delivery and optimal customer satisfaction for Bing and Office 100M+ customers.</li>
              <li>In less than a year, developed the org into high performers with strong moral shipping high impact products.</li>
              </ul>
                
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2010 - June 2013</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Nova Southeastern University, FL</h3>
              <div className="subheading mb-3">PH.D(ABD)</div>
              <div>Computer and Information Sciences</div>
              <p>GPA: 3.79/4.0</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2008 - May 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Nova Southeastern University, FL</h3>
              <div className="subheading mb-3">MASTER OF SCIENCE</div>
              <p>GPA: 4.0/4.0</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2004 - May 2008</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            I love coaching, mentoring, design, learning new technologies, public speaking (especially motivational speeches), anad problem solving
          </p>
          <p className="mb-0">
            I like soccer and I am a big fan of Liverpool, in addition to Seahawks football. 
            I like all Marvel characters and only the Flash from DC. I really enjoy the ability to have a big impact on people's life.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Stock Awards for high impact, improving performance, increasing revenue [A Place For Mom] - 2019
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - Audience favorite award for Deep Learning Hackathon project - [Microsoft] - Hackathon 2018
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - Wiki and Technical Documentation Authoring Leader - [Microsoft] - 2017
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Tech Transfer Awards for shipping new technology products - [Microsoft] - 2012
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Epsilon Pi Epsilon [honors] - Nova Southeastern University - 2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Gold Start Award from Microsoft VP for high impact - [Microsoft] - 2005
            </li>
            
            
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
