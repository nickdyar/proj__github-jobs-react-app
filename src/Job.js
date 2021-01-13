import React, { useState } from 'react';
// import { Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Collapse from './components/Collapse';
import Img from './components/Img';
import Card from './components/Card';
import CardBody from './components/CardBody';
import CardTitle from './components/CardTitle';
import CardDate from './components/CardDate';
import CardText from './components/CardText';
import CardWrapper from './components/CardWrapper';
import CardHeader from './components/CardHeader';
import Badge from './components/Badge';
import Button from './components/Button';
import BadgeWrapper from './components/BadgeWrapper';
import CardHeaderLeft from './components/CardHeaderLeft';
import CardHeaderRight from './components/CardHeaderRight';

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardBody>
        <CardWrapper>
          <CardHeader>
            <CardHeaderLeft>
              <CardTitle>{job.title}</CardTitle>
              <CardDate>
                {new Date(job.created_at).toLocaleDateString()}
              </CardDate>
              <BadgeWrapper>
                <Badge>{job.type}</Badge>
                <Badge>{job.location}</Badge>
              </BadgeWrapper>
            </CardHeaderLeft>
            <CardHeaderRight>
              <Img className='logo' src={job.company_logo} alt={job.company} />
            </CardHeaderRight>
          </CardHeader>

          <div style={{ wordBreak: 'break-word' }}>
            <ReactMarkdown source={job.how_to_apply} />
          </div>

          <CardText>
            <Button
              onClick={() => setOpen((prevOpen) => !prevOpen)}
              variant='primary'
            >
              {open ? 'Hide Details' : 'View Details'}
            </Button>
          </CardText>

          <Collapse in={open}>
            {/* React Markdown Cotnainer */}
            <div className='mt-4'>
              {/* React Markdown Text */}
              <ReactMarkdown source={job.description} />
              {/* visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')}; */}
            </div>
          </Collapse>
        </CardWrapper>
      </CardBody>
    </Card>
  );
}
