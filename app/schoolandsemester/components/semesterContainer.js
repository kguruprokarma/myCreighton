import React from 'react';
import Accordion from '../../common/accordion';

const SemesterContainer = (semesterProps) => (
  <article>
    {console.log('semesterProps')}
    {semesterProps.data && <div>
      <h2>{semesterProps.data.title} </h2>
      <h3>{semesterProps.data.headlines} </h3>
      <span>Red badge items have action required</span>
      <span>Description</span> <span><button>Show</button></span>
      <span><button>Collapse All</button></span>
      {semesterProps.data.accordionObj && <div>
        <ul>
          {semesterProps.data.accordionObj.map((accordionDetails, accordionIndex) => (
            <li>{accordionIndex} {accordionDetails.accordionTitle}
              <ul>
                {accordionDetails.links.map((linkDetails, linkIndex) => (
                  <li key={linkIndex}>{linkDetails}</li>
                ))}
              </ul> </li>
          ))}
        </ul>
      </div>
      }
    </div>
    }
  </article>
);

export default SemesterContainer;