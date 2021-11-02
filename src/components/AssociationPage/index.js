import React from 'react';
import PropTypes from 'prop-types';

import ExplainAssociation from 'src/components/ExplainAssociation';
import datas from 'src/datas';
import './style.scss';

const AssociationPage = () => (
  <main className="associationPage">
    <h1 className="associationPage-title"> L' association </h1>
    <div className="associationPage-content">
      {datas.map((data) => (
        <ExplainAssociation className="explainAssociation" key={data.id} {...data} />
      ))}
    </div>
  </main>
);

AssociationPage.propTypes = {

};

export default AssociationPage;
