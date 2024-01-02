# Bento Page

- Tailwind layout that resembles a Bento Box

## Code

```JS
export const BentoPage = () => {
  return (
    <div className={`w-full grid grid-rows-3 grid-cols-4 w-full min-h-[50vh] rounded gap-1`}>
      <div className="md:col-span-2 col-span-4 row-span-2 lg">
        <div className={`card rounded-lg h-full text-3xl px-20 pt-4 bg-stone-100`}>
          Book Qoute of the Day
          <p className="text-xl pt-4">
            &quot;The Goldilocks Rule states that humans experience peak motivation when working on tasks that are right
            on the edge of their current abilities. Not too hard. Not too easy. Just right.&quot;
          </p>
          <span className="text-sm">Atomic Habits (James Clear)</span>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <div className={`card rounded-sm h-full pt-6 pl-2 bg-yellow-100`}>
          <p>Spanish 101</p>
          <p>- Buenos Dias</p>
          <p>- Mucho Gusto</p>
          <p>- Mi Hablo Espanol</p>
          <p>- Tu eres Juan</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1 px-2 font-thin">
        <ul className="py-2">
          <li className={`pb-2 flex font-regular ${secondaryText.className}`}>
            Categorize Notes
          </li>
          <li className={`pb-2 flex font-regular ${secondaryText.className}`}>
            Get Random Daily Reminders via Email
          </li>
          <li className={`pb-2 flex font-regular ${secondaryText.className}`}>
            Quick Search
          </li>
        </ul>
      </div>
      <div className="col-span-1 row-span-1">
        <span className="pl-2 text-xl font-thin">NOTES NOTES NOTES</span>
        <div className={`card rounded-sm h-1/4 px-2 ${secondaryText.className}`}>Study Notes (Algorithms)</div>
        <div className={`card rounded-sm h-1/3 px-2 ${secondaryText.className}`}>Study Notes (Data)</div>
      </div>
      <div className="col-span-1 row-span-1">
        <div className={`card rounded-sm h-full px-2 text-xl bg-sky-100 ${secondaryText.className}`}>
          <div className="pt-5">
            Gratitude <br />
            Grateful to be able to spend time with my family 🙏 (Dec 2023)
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-1"></div>
      <div className="col-span-1 row-span-1"></div>
      <div className="col-span-2 row-span-1">
        <div className={`card rounded-sm h-full px-2 bg-amber-100 ${secondaryText.className}`}>
          <span className="text-3xl">Lessons Learned</span>

          <p className="pt-3">
            &quot;Micromanaging occurs because of a fear that someone else isn&apos;t going to do the job.&quot;
          </p>
          <p className="pt-2">
            &quot;How to thrive in an unknowable future? Choose the plan with the most options. The best plan is the one
            that lets you change your plans.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

```
