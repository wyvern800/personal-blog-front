import React, { useState, useEffect } from 'react';
import { Badge } from './styles';
import { addDays, isBefore } from 'date-fns';

type NewBadgeProps = {
  createdAt?: Date;
};

const NewBadge = (props: NewBadgeProps) => {
  const { createdAt } = props;

  const [isNew, setIsNew] = useState<Boolean>(false);

  useEffect(() => {
    if (createdAt !== undefined) {
      const createdAtPlus = addDays(new Date(createdAt), 3);
      const isNew = isBefore(Date.now(), createdAtPlus);
      setIsNew(isNew);
    }
  }, []);

  return isNew && <Badge>new</Badge>;
};

export default NewBadge;
