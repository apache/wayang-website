/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/* Simple line icons, drawn with currentColor so they follow the theme. */
const paths: Record<string, ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  issue: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  play: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5" />
      <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.3 2.5 3.5 5.2" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10v4h3l7 4V6L6 10z" />
      <path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20h4L19 9l-4-4L4 16z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  hash: <path d="M9 3 7 21M17 3l-2 18M4 8.5h17M3 15.5h17" />,
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  book: (
    <>
      <path d="M12 6.5C10 5 7 4.5 3 5v13c4-.5 7 0 9 1.5 2-1.5 5-2 9-1.5V5c-4-.5-7 0-9 1.5z" />
      <path d="M12 6.5v13" />
    </>
  ),
  check: (
    <>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6" />
      <circle cx="12" cy="17" r=".6" fill="currentColor" />
    </>
  ),
  school: (
    <>
      <path d="m2 9 10-5 10 5-10 5z" />
      <path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 9-9M17 6l3 3M14.5 8.5l2 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export function Icon({name}: {name: string}) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

type LinkItem = {label: string; to: string};

export type Card = {
  icon: string;
  title: string;
  description: ReactNode;
  links: LinkItem[];
  highlight?: boolean;
};

export function CardGrid({cards}: {cards: Card[]}) {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <div
          key={card.title}
          className={card.highlight ? `${styles.card} ${styles.highlight}` : styles.card}>
          <div className={styles.cardHead}>
            <Icon name={card.icon} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
          </div>
          <p className={styles.cardText}>{card.description}</p>
          <div className={styles.cardLinks}>
            {card.links.map((l) => (
              <Link key={l.label} to={l.to}>
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export type Step = {title: string; body: ReactNode};

export function Steps({steps}: {steps: Step[]}) {
  return (
    <ol className={styles.steps}>
      {steps.map((s, i) => (
        <li key={s.title} className={styles.step}>
          <span className={styles.stepNum}>{i + 1}</span>
          <div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <div className={styles.stepBody}>{s.body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function QuickActions({actions}: {actions: (LinkItem & {primary?: boolean})[]}) {
  return (
    <div className={styles.actions}>
      {actions.map((a) => (
        <Link
          key={a.label}
          to={a.to}
          className={`button button--lg ${a.primary ? 'button--primary' : 'button--secondary'}`}>
          {a.label}
        </Link>
      ))}
    </div>
  );
}

export function Callout({children}: {children: ReactNode}) {
  return (
    <div className={styles.callout}>
      <Icon name="help" />
      <div>{children}</div>
    </div>
  );
}
