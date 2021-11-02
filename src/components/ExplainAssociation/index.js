/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Box, Modal, Typography } from '@material-ui/core';

const ExplainAssociation = ({
  id, title, presentation, schema, img,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="explainAssociation">
      <div key={id} className="explainAssociation-container">
        <img
          src={img}
          alt={title}
          loading="lazy"
          onClick={handleOpen}
          className="explainAssociation-image"
        />
        <p className="explainAssociation-title">
          {title}
        </p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-style">
          <button
            className="modal-button"
            aria-label="fermer"
            type="button"
            onClick={handleClose}
          >✘
          </button>
          <Typography className="modal-modal-title" variant="h4" component="h2">
            {title}
          </Typography>
          <Typography className="modal-modal-description" component="div">
            {presentation.map((paragraphe) => (
              <p key={paragraphe} className="paragraphe">
                {paragraphe}
              </p>
            ))}
            { schema ? (
              <div className="modal-schema">
                <img
                  src={schema}
                  alt={title}
                  loading="lazy"
                />
              </div>
            ) : ''}
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};

ExplainAssociation.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  schema: PropTypes.string,
  title: PropTypes.string.isRequired,
  presentation: PropTypes.array.isRequired,
};

ExplainAssociation.defaultProps = {
  schema: '',
};

export default ExplainAssociation;
