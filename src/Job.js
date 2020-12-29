import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Card from './components/Card/Card';
import CardBody from './components/Card/CardBody';
import CardTitle from './components/Card/CardTitle';
import CardSubtitle from './components/Card/CardSubtitle';
import CardText from './components/Card/CardText';
import Badge from './components/Badge/Badge';
import Button from './components/Button/Button';

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className='mb-3'>
      <CardBody>
        <div className='d-flex justify-content-between'>
          <div>
            <CardTitle>
              {job.title} -{' '}
              <span className='text-muted font-weight-light'>
                {job.company}
              </span>
            </CardTitle>

            <CardSubtitle className='text-muted mb-2'>
              {new Date(job.created_at).toLocaleDateString()}
            </CardSubtitle>

            <Badge variant='secondary' className='mr-2'>
              {job.type}
            </Badge>

            <Badge variant='secondary'>{job.location}</Badge>

            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>

          <img
            className='d-sm-none d-md-block'
            height='50'
            src={job.company_logo}
            alt={job.company}
          />
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
          <div className='mt-4'>
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </CardBody>
    </Card>
  );
}
