import React from 'react';
import { Collaborator } from '../../types/collaborator';

import {
  Container,
  Main,
  AboutSection,
  Profile,
  DevInfo,
  LinkSocial,
} from './styles';

type CollaboratorProps = {
  collaborators: Collaborator[];
};

const Collaborators = ({ collaborators }: CollaboratorProps) => {
  return (
    <Container>
      <Main>
        {collaborators.map((collaborator, index) => (
          <AboutSection key={index}>
            <Profile src={collaborator.avatar} />
            <DevInfo>
              {collaborator.name && <h2>{collaborator.name}</h2>}
              {collaborator.effectPhrase && <p>{collaborator.effectPhrase}</p>}
              {collaborator.about && (
                <>
                  <h3>About</h3>
                  <p>{collaborator.about}</p>
                </>
              )}
              {collaborator.skills && (
                <>
                  <h3>Main Skills</h3>
                  <ul>
                    {Object.values(collaborator.skills).map((skill, index) => {
                      return <li key={index}>{skill}</li>;
                    })}
                  </ul>
                </>
              )}
              {collaborator.socials && (
                <>
                  <h3>Socials</h3>
                  <ul>
                    {Object.values(collaborator.socials).map(
                      (social, index) => {
                        return (
                          <li key={index}>
                            <LinkSocial target="_blank" href={social.link}>
                              {social.name}
                            </LinkSocial>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </>
              )}
            </DevInfo>
          </AboutSection>
        ))}
      </Main>
    </Container>
  );
};

export default Collaborators;
