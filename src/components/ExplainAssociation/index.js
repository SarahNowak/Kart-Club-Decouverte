/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

import './style.scss';
import { Box, Modal, Typography } from '@material-ui/core';

const ExplainAssociation = ({
  id, img, title, presentation,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="explainAssociation">
      <div className="explainAssociation-container">
        <ImageList cols={1}>
          <ImageListItem key={id}>
            <img
              src={img}
              alt={title}
              loading="lazy"
              onClick={handleOpen}
            />
          </ImageListItem>
        </ImageList>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-style">
          <Typography className="modal-modal-title" variant="h4" component="h2">
            {title}
          </Typography>
          <Typography className="modal-modal-description">
            {presentation}
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};

ExplainAssociation.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  presentation: PropTypes.string.isRequired,
};

export default ExplainAssociation;
