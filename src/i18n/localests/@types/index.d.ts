import { About } from './about';
import { Announcement } from './announcement';
import { Common } from './common';
import { Conditions } from './conditions';
import { Contact } from './contact';
import { Footer } from './footer';
import { Header } from './header';

type IResources = {
  about: About;
  announcement: Announcement;
  common: Common;
  contact: Contact;
  footer: Footer;
  header: Header;
  conditions: Conditions;
};

export default IResources;
