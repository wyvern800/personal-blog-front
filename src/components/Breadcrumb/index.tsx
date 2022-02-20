import React from 'react';
import { Wrapper, CrumbLink } from './styles';
import { CrumbType } from '../../types/crumb';

type BreadcrumbProps = {
  previous?: CrumbType[];
  currentAt: CrumbType;
};

const Breadcrumb = (props: BreadcrumbProps) => {
  const { previous, currentAt } = props;

  return (
    <>
      <Wrapper>
        <div className="ui huge breadcrumb">
          <CrumbLink to={'/'} className="section">
          <span>Home</span>
          </CrumbLink>
          {previous && <i className="right chevron icon divider"></i>}
          {previous !== undefined &&
            previous.map((crumb: CrumbType, index) => (
              <>
                {crumb.linkTo && (
                  <>
                    <CrumbLink key={index} to={crumb?.linkTo} className="section">
                      <span>{crumb?.name}</span>
                    </CrumbLink>
                    {index !== previous.length - 1 && (
                      <i className="right chevron icon divider"></i>
                    )}
                  </>
                )}
              </>
            ))}
          <i className="right arrow icon divider"></i>
          <div className="active section">{currentAt.name}</div>
        </div>
      </Wrapper>
    </>
  );
};

export default Breadcrumb;
