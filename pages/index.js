import Footer from '../components/Footer';
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import Projects from '../components/Projects';
import Cta from '../components/Cta';
import Strengths from '../components/Strengths';
import { useEffect, useState } from 'react';

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Home() {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [strengths, setStrengths] = useState([]);

  useEffect(() => {
    async function getStrengths() {
      const allStrengths = await fetchEntries();
      setStrengths([...allStrengths]);
    }
    getStrengths();
  }, []);
  return (
    <>
      <Header />
      <Cta />
      <Strengths strengths={strengths} />
      <Projects />
      <SocialMedia />
      <Footer />
    </>
  );
}
