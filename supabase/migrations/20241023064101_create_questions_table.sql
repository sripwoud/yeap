create table public.questions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  title text not null,
  active boolean not null default true,
  yes integer not null default 0,
  no integer not null default 0
);
comment on table public.questions is 'Questions for users to give feedback on';
comment on column public.questions.yes is 'Number of yes votes';
comment on column public.questions.no is 'Number of no votes';