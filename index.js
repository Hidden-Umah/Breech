const WARM_UP_DATA = {"quotes":["Start where you are, use what you have, and trust that doing something today beats waiting for the perfect moment.","Small steps taken consistently will always outrun big leaps taken occasionally.","Progress over perfection — a messy start beats a flawless plan that never leaves the ground.","You don't need to feel ready to begin; readiness comes from doing, not from waiting.","Motivation gets you started, but discipline is what keeps you going when the feeling fades.","Consistency is the real secret — not talent, not luck, just showing up every single day.","Push yourself even when it's hard, because the version of you that you're building lives on the other side of the discomfort.","Great things take time, and that's exactly why most people never see them through.","Every day is a fresh chance to be a little sharper, a little stronger, a little more intentional than yesterday.","Fall in love with the process, and the results will take care of themselves over time.","The only real limit is the ceiling you've decided to believe in — change your mind and the ceiling lifts.","Hard work compounds quietly over time until one day it becomes undeniable to everyone around you.","Stay patient and trust the journey, because impatience is expensive and it costs you growth every time.","One step at a time is still forward motion, and forward motion is all you need to stay in the game.","You're stronger than you think — every hard thing you've survived is proof that you can handle what's ahead.","Slow progress is still progress, and the only failure is stopping completely.","Action creates clarity; waiting for clarity before acting is how years disappear without movement.","Don't stop until you're genuinely proud of what you've built, not proud of what you planned.","Dream as big as you want, but make your first step simple enough that you can take it today.","Make today count — not perfectly, not dramatically, just meaningfully.","Every effort you put in is building something, even when the results are too small to see yet.","The grind pays off in compound interest — invisible for a long time, then suddenly impossible to ignore.","Believe in your progress by looking back at where you started, not just at how far you still have to go.","Show up on the tough days especially, because that's when your consistency means the most.","Growth happens outside your comfort zone — not because it sounds good on a poster, but because discomfort is literally how adaptation works.","Be better than you were yesterday in at least one small way that actually matters to you.","Guard your focus like it's your most valuable possession, because in a distracted world it genuinely is.","Your future self is being built right now, decision by decision, habit by habit, day by day.","Turn every setback into material — not motivation for a speech, but fuel for the quiet, daily work.","Success is built in private, in the small daily choices no one ever sees or applauds.","Real commitment means showing up even when the excitement is gone and the work feels ordinary.","Win the morning and you've already built momentum that makes the rest of the day easier to own.","Stay hungry for improvement, because the moment you stop wanting to grow is the moment you start drifting backward.","Winners keep working long after the initial excitement fades, and that's exactly what separates them.","Fall down, get back up, and get back up faster each time — resilience is a skill you build through repetition.","Where your focus goes, your energy follows — so choose what you point your attention at very carefully.","Someday is not a day of the week; the only real window you ever have is the one right in front of you.","Nothing in your life changes until something in your behavior changes — no amount of wishing substitutes for that.","Do everything with purpose, because unconscious living is how years slip by without anything to show for them.","You don't need to be the most talented person in the room — you just need to be the one who refuses to quit.","You've pushed through hard things before, and you have everything you need to push through this one too.","Work hard in silence and let the results speak, because not everything that matters needs an audience.","Stay consistent long enough and results become inevitable — the only variable is whether you keep showing up.","Go all in on the version of life that actually means something to you, because half-measures produce half-results.","Every day you keep the momentum going, you lower the cost of showing up tomorrow.","Strength is built through struggle, not through comfort — every hard thing is building something in you.","Your mindset is the one thing you have complete control over, so make it work for you instead of against you.","Push past what you think your limit is, because your real ceiling is almost always higher than the one you imagine.","Earn your results through the work, because the world rewards effort and consistency more than it rewards talent.","Finish strong, because how you end a thing tells you everything about who you're becoming."]};
const MOTIVATION_DATA = [{"id":1,"category":"faith","text":"Trust in the Lord with all your heart.","source":"Proverbs 3:5","type":"bible"},{"id":2,"category":"discipline","text":"Where focus goes, energy flows.","source":"Unknown","type":"principle"},{"id":3,"category":"life","text":"Start now. Not later.","source":"Unknown","type":"rule"},{"id":4,"category":"faith","text":"With God all things are possible.","source":"Matthew 19:26","type":"bible"},{"id":5,"category":"success","text":"Execution beats perfection.","source":"Unknown","type":"principle"},{"id":6,"category":"wisdom","text":"Think before you act.","source":"Unknown","type":"rule"},{"id":7,"category":"faith","text":"The Lord is my shepherd.","source":"Psalm 23:1","type":"bible"},{"id":8,"category":"discipline","text":"Consistency beats intensity.","source":"Unknown","type":"principle"},{"id":9,"category":"life","text":"Your habits shape your future.","source":"Unknown","type":"principle"},{"id":10,"category":"faith","text":"Be strong and courageous.","source":"Joshua 1:9","type":"bible"},{"id":11,"category":"success","text":"Small wins compound.","source":"Unknown","type":"principle"},{"id":12,"category":"wisdom","text":"Silence is power.","source":"Unknown","type":"rule"},{"id":13,"category":"faith","text":"Pray without ceasing.","source":"1 Thessalonians 5:17","type":"bible"},{"id":14,"category":"discipline","text":"Do it even when you don’t feel like it.","source":"Unknown","type":"principle"},{"id":15,"category":"life","text":"Time wasted is life wasted.","source":"Unknown","type":"rule"},{"id":16,"category":"faith","text":"Cast your cares on Him.","source":"1 Peter 5:7","type":"bible"},{"id":17,"category":"success","text":"Results require sacrifice.","source":"Unknown","type":"quote"},{"id":18,"category":"wisdom","text":"Learn from everyone.","source":"Unknown","type":"rule"},{"id":19,"category":"faith","text":"God is your refuge.","source":"Psalm 46:1","type":"bible"},{"id":20,"category":"discipline","text":"No excuses. Just work.","source":"Unknown","type":"rule"},{"id":21,"category":"life","text":"Act now, not someday.","source":"Unknown","type":"principle"},{"id":22,"category":"faith","text":"Seek first the kingdom.","source":"Matthew 6:33","type":"bible"},{"id":23,"category":"success","text":"Winners execute.","source":"Unknown","type":"rule"},{"id":24,"category":"wisdom","text":"Guard your thoughts.","source":"Unknown","type":"rule"},{"id":25,"category":"faith","text":"The joy of the Lord is strength.","source":"Nehemiah 8:10","type":"bible"},{"id":26,"category":"discipline","text":"Hard work beats talent.","source":"Unknown","type":"quote"},{"id":27,"category":"life","text":"You become what you repeat.","source":"Unknown","type":"principle"},{"id":28,"category":"faith","text":"Walk by faith, not by sight.","source":"2 Corinthians 5:7","type":"bible"},{"id":29,"category":"success","text":"Stay consistent.","source":"Unknown","type":"rule"},{"id":30,"category":"wisdom","text":"Listen more than you speak.","source":"Unknown","type":"rule"},{"id":31,"category":"faith","text":"God is always with you.","source":"Isaiah 41:10","type":"bible"},{"id":32,"category":"discipline","text":"Win the morning.","source":"Unknown","type":"rule"},{"id":33,"category":"life","text":"Progress over perfection.","source":"Unknown","type":"principle"},{"id":34,"category":"faith","text":"God’s grace is sufficient.","source":"2 Corinthians 12:9","type":"bible"},{"id":35,"category":"success","text":"Build daily.","source":"Unknown","type":"rule"},{"id":36,"category":"wisdom","text":"Patience is strength.","source":"Unknown","type":"principle"},{"id":37,"category":"faith","text":"Delight in the Lord.","source":"Psalm 37:4","type":"bible"},{"id":38,"category":"discipline","text":"Stay focused.","source":"Unknown","type":"rule"},{"id":39,"category":"life","text":"Energy follows focus.","source":"Unknown","type":"principle"},{"id":40,"category":"faith","text":"God fights for you.","source":"Exodus 14:14","type":"bible"},{"id":41,"category":"success","text":"Discipline equals freedom.","source":"Unknown","type":"principle"},{"id":42,"category":"wisdom","text":"Choose wisely.","source":"Unknown","type":"rule"},{"id":43,"category":"faith","text":"Faith can move mountains.","source":"Matthew 17:20","type":"bible"},{"id":44,"category":"discipline","text":"No distractions.","source":"Unknown","type":"rule"},{"id":45,"category":"life","text":"You control your path.","source":"Unknown","type":"principle"},{"id":46,"category":"faith","text":"God is your strength.","source":"Psalm 28:7","type":"bible"},{"id":47,"category":"success","text":"Stay hungry.","source":"Unknown","type":"rule"},{"id":48,"category":"wisdom","text":"Observe everything.","source":"Unknown","type":"rule"},{"id":49,"category":"faith","text":"God will make a way.","source":"Isaiah 43:19","type":"bible"},{"id":50,"category":"discipline","text":"Do the hard things.","source":"Unknown","type":"principle"},{"id":51,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":52,"category":"discipline","text":"One focused hour matters.","source":"Unknown","type":"principle"},{"id":53,"category":"life","text":"A calm mind sees clearly.","source":"Unknown","type":"rule"},{"id":54,"category":"success","text":"Build the habit, then the result.","source":"Unknown","type":"quote"},{"id":55,"category":"wisdom","text":"Done is powerful.","source":"Unknown","type":"affirmation"},{"id":56,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":57,"category":"leadership","text":"Move with intention.","source":"Unknown","type":"principle"},{"id":58,"category":"courage","text":"The next step is enough.","source":"Unknown","type":"rule"},{"id":59,"category":"purpose","text":"Make discipline your default.","source":"Unknown","type":"quote"},{"id":60,"category":"growth","text":"Clarity grows through action.","source":"Unknown","type":"affirmation"},{"id":61,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":62,"category":"discipline","text":"Pressure reveals preparation.","source":"Unknown","type":"principle"},{"id":63,"category":"life","text":"Keep promises to yourself.","source":"Unknown","type":"rule"},{"id":64,"category":"success","text":"Start before you feel ready.","source":"Unknown","type":"quote"},{"id":65,"category":"wisdom","text":"The standard is consistency.","source":"Unknown","type":"affirmation"},{"id":66,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":67,"category":"leadership","text":"A little daily work compounds.","source":"Unknown","type":"principle"},{"id":68,"category":"courage","text":"Less noise, more work.","source":"Unknown","type":"rule"},{"id":69,"category":"purpose","text":"Rest, then return stronger.","source":"Unknown","type":"quote"},{"id":70,"category":"growth","text":"Focus is a competitive advantage.","source":"Unknown","type":"affirmation"},{"id":71,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":72,"category":"discipline","text":"Simple routines win.","source":"Unknown","type":"principle"},{"id":73,"category":"life","text":"Let your work speak.","source":"Unknown","type":"rule"},{"id":74,"category":"success","text":"Strong days are built early.","source":"Unknown","type":"quote"},{"id":75,"category":"wisdom","text":"Patience is part of mastery.","source":"Unknown","type":"affirmation"},{"id":76,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":77,"category":"leadership","text":"Confidence follows reps.","source":"Unknown","type":"principle"},{"id":78,"category":"courage","text":"Your environment shapes effort.","source":"Unknown","type":"rule"},{"id":79,"category":"purpose","text":"Protect the morning.","source":"Unknown","type":"quote"},{"id":80,"category":"growth","text":"Choose the hard right.","source":"Unknown","type":"affirmation"},{"id":81,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":82,"category":"discipline","text":"Good decisions save energy.","source":"Unknown","type":"principle"},{"id":83,"category":"life","text":"Courage is action with fear present.","source":"Unknown","type":"rule"},{"id":84,"category":"success","text":"Momentum loves movement.","source":"Unknown","type":"quote"},{"id":85,"category":"wisdom","text":"The basics still work.","source":"Unknown","type":"affirmation"},{"id":86,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":87,"category":"leadership","text":"Quiet work creates loud results.","source":"Unknown","type":"principle"},{"id":88,"category":"courage","text":"You do not need perfect conditions.","source":"Unknown","type":"rule"},{"id":89,"category":"purpose","text":"Attention is a form of respect.","source":"Unknown","type":"quote"},{"id":90,"category":"growth","text":"Train your mind to stay.","source":"Unknown","type":"affirmation"},{"id":91,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":92,"category":"discipline","text":"Purpose makes pressure lighter.","source":"Unknown","type":"principle"},{"id":93,"category":"life","text":"Your values should guide your schedule.","source":"Unknown","type":"rule"},{"id":94,"category":"success","text":"Steady beats scattered.","source":"Unknown","type":"quote"},{"id":95,"category":"wisdom","text":"Energy follows direction.","source":"Unknown","type":"affirmation"},{"id":96,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":97,"category":"leadership","text":"Today is a seed.","source":"Unknown","type":"principle"},{"id":98,"category":"courage","text":"Say no with confidence.","source":"Unknown","type":"rule"},{"id":99,"category":"purpose","text":"Master the ordinary.","source":"Unknown","type":"quote"},{"id":100,"category":"growth","text":"Consistency is self-trust.","source":"Unknown","type":"affirmation"},{"id":101,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":102,"category":"discipline","text":"Growth often feels awkward first.","source":"Unknown","type":"principle"},{"id":103,"category":"life","text":"A clear plan reduces fear.","source":"Unknown","type":"rule"},{"id":104,"category":"success","text":"Discipline creates options.","source":"Unknown","type":"quote"},{"id":105,"category":"wisdom","text":"Hard seasons teach durable lessons.","source":"Unknown","type":"affirmation"},{"id":106,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":107,"category":"leadership","text":"Keep learning in public and private.","source":"Unknown","type":"principle"},{"id":108,"category":"courage","text":"Humility keeps you growing.","source":"Unknown","type":"rule"},{"id":109,"category":"purpose","text":"The quiet choice is often the wise one.","source":"Unknown","type":"quote"},{"id":110,"category":"growth","text":"What you repeat, you become.","source":"Unknown","type":"affirmation"},{"id":111,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":112,"category":"discipline","text":"Stay teachable.","source":"Unknown","type":"principle"},{"id":113,"category":"life","text":"Preparation makes boldness look easy.","source":"Unknown","type":"rule"},{"id":114,"category":"success","text":"Earn your confidence honestly.","source":"Unknown","type":"quote"},{"id":115,"category":"wisdom","text":"You can reset at any hour.","source":"Unknown","type":"affirmation"},{"id":116,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":117,"category":"leadership","text":"A focused life feels lighter.","source":"Unknown","type":"principle"},{"id":118,"category":"courage","text":"The boring work pays bills.","source":"Unknown","type":"rule"},{"id":119,"category":"purpose","text":"Your word should mean something.","source":"Unknown","type":"quote"},{"id":120,"category":"growth","text":"Good work takes time.","source":"Unknown","type":"affirmation"},{"id":121,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":122,"category":"discipline","text":"Build a life you respect.","source":"Unknown","type":"principle"},{"id":123,"category":"life","text":"Let truth correct you quickly.","source":"Unknown","type":"rule"},{"id":124,"category":"success","text":"The mission is bigger than the mood.","source":"Unknown","type":"quote"},{"id":125,"category":"wisdom","text":"What matters most deserves your best.","source":"Unknown","type":"affirmation"},{"id":126,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":127,"category":"leadership","text":"Real growth is often invisible at first.","source":"Unknown","type":"principle"},{"id":128,"category":"courage","text":"You are responsible for your pace.","source":"Unknown","type":"rule"},{"id":129,"category":"purpose","text":"Finish the rep.","source":"Unknown","type":"quote"},{"id":130,"category":"growth","text":"Skill grows where ego shrinks.","source":"Unknown","type":"affirmation"},{"id":131,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":132,"category":"discipline","text":"You can be kind and disciplined.","source":"Unknown","type":"principle"},{"id":133,"category":"life","text":"Direction matters more than speed.","source":"Unknown","type":"rule"},{"id":134,"category":"success","text":"Guard your inner life.","source":"Unknown","type":"quote"},{"id":135,"category":"wisdom","text":"Wisdom listens twice.","source":"Unknown","type":"affirmation"},{"id":136,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":137,"category":"leadership","text":"A strong routine protects weak moments.","source":"Unknown","type":"principle"},{"id":138,"category":"courage","text":"If it matters, put it on the calendar.","source":"Unknown","type":"rule"},{"id":139,"category":"purpose","text":"Build quietly.","source":"Unknown","type":"quote"},{"id":140,"category":"growth","text":"Decide once, then repeat.","source":"Unknown","type":"affirmation"},{"id":141,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":142,"category":"discipline","text":"Do not negotiate with obvious priorities.","source":"Unknown","type":"principle"},{"id":143,"category":"life","text":"Stay grounded when things go well.","source":"Unknown","type":"rule"},{"id":144,"category":"success","text":"Slow growth still counts.","source":"Unknown","type":"quote"},{"id":145,"category":"wisdom","text":"The right work feels heavy before it feels natural.","source":"Unknown","type":"affirmation"},{"id":146,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":147,"category":"leadership","text":"Every day is training.","source":"Unknown","type":"principle"},{"id":148,"category":"courage","text":"Your consistency is speaking for you.","source":"Unknown","type":"rule"},{"id":149,"category":"purpose","text":"Stay faithful in private.","source":"Unknown","type":"quote"},{"id":150,"category":"growth","text":"A thoughtful pause can save a messy hour.","source":"Unknown","type":"affirmation"},{"id":151,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":152,"category":"discipline","text":"Keep your eyes on what matters.","source":"Unknown","type":"principle"},{"id":153,"category":"life","text":"Excellence starts with attention.","source":"Unknown","type":"rule"},{"id":154,"category":"success","text":"Keep showing up.","source":"Unknown","type":"quote"},{"id":155,"category":"wisdom","text":"One focused hour matters.","source":"Unknown","type":"affirmation"},{"id":156,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":157,"category":"leadership","text":"Build the habit, then the result.","source":"Unknown","type":"principle"},{"id":158,"category":"courage","text":"Done is powerful.","source":"Unknown","type":"rule"},{"id":159,"category":"purpose","text":"Protect your attention.","source":"Unknown","type":"quote"},{"id":160,"category":"growth","text":"Move with intention.","source":"Unknown","type":"affirmation"},{"id":161,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":162,"category":"discipline","text":"Make discipline your default.","source":"Unknown","type":"principle"},{"id":163,"category":"life","text":"Clarity grows through action.","source":"Unknown","type":"rule"},{"id":164,"category":"success","text":"Your future is being practiced now.","source":"Unknown","type":"quote"},{"id":165,"category":"wisdom","text":"Pressure reveals preparation.","source":"Unknown","type":"affirmation"},{"id":166,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":167,"category":"leadership","text":"Start before you feel ready.","source":"Unknown","type":"principle"},{"id":168,"category":"courage","text":"The standard is consistency.","source":"Unknown","type":"rule"},{"id":169,"category":"purpose","text":"Choose progress again today.","source":"Unknown","type":"quote"},{"id":170,"category":"growth","text":"A little daily work compounds.","source":"Unknown","type":"affirmation"},{"id":171,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":172,"category":"discipline","text":"Rest, then return stronger.","source":"Unknown","type":"principle"},{"id":173,"category":"life","text":"Focus is a competitive advantage.","source":"Unknown","type":"rule"},{"id":174,"category":"success","text":"Delay comfort, gain freedom.","source":"Unknown","type":"quote"},{"id":175,"category":"wisdom","text":"Simple routines win.","source":"Unknown","type":"affirmation"},{"id":176,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":177,"category":"leadership","text":"Let your work speak.","source":"Unknown","type":"principle"},{"id":178,"category":"courage","text":"Strong days are built early.","source":"Unknown","type":"rule"},{"id":179,"category":"purpose","text":"Patience is part of mastery.","source":"Unknown","type":"quote"},{"id":180,"category":"growth","text":"Finish what you begin.","source":"Unknown","type":"affirmation"},{"id":181,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":182,"category":"discipline","text":"Your environment shapes effort.","source":"Unknown","type":"principle"},{"id":183,"category":"life","text":"Protect the morning.","source":"Unknown","type":"rule"},{"id":184,"category":"success","text":"Choose the hard right.","source":"Unknown","type":"quote"},{"id":185,"category":"wisdom","text":"Lead yourself first.","source":"Unknown","type":"affirmation"},{"id":186,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":187,"category":"leadership","text":"Good decisions save energy.","source":"Unknown","type":"principle"},{"id":188,"category":"courage","text":"Courage is action with fear present.","source":"Unknown","type":"rule"},{"id":189,"category":"purpose","text":"Momentum loves movement.","source":"Unknown","type":"quote"},{"id":190,"category":"growth","text":"The basics still work.","source":"Unknown","type":"affirmation"},{"id":191,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":192,"category":"discipline","text":"Keep your standards high.","source":"Unknown","type":"principle"},{"id":193,"category":"life","text":"Quiet work creates loud results.","source":"Unknown","type":"rule"},{"id":194,"category":"success","text":"You do not need perfect conditions.","source":"Unknown","type":"quote"},{"id":195,"category":"wisdom","text":"Attention is a form of respect.","source":"Unknown","type":"affirmation"},{"id":196,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":197,"category":"leadership","text":"Train your mind to stay.","source":"Unknown","type":"principle"},{"id":198,"category":"courage","text":"The cost of delay is real.","source":"Unknown","type":"rule"},{"id":199,"category":"purpose","text":"Purpose makes pressure lighter.","source":"Unknown","type":"quote"},{"id":200,"category":"growth","text":"Your values should guide your schedule.","source":"Unknown","type":"affirmation"},{"id":201,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":202,"category":"discipline","text":"Steady beats scattered.","source":"Unknown","type":"principle"},{"id":203,"category":"life","text":"Energy follows direction.","source":"Unknown","type":"rule"},{"id":204,"category":"success","text":"The deep work is worth it.","source":"Unknown","type":"quote"},{"id":205,"category":"wisdom","text":"Today is a seed.","source":"Unknown","type":"affirmation"},{"id":206,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":207,"category":"leadership","text":"Say no with confidence.","source":"Unknown","type":"principle"},{"id":208,"category":"courage","text":"Master the ordinary.","source":"Unknown","type":"rule"},{"id":209,"category":"purpose","text":"Consistency is self-trust.","source":"Unknown","type":"quote"},{"id":210,"category":"growth","text":"Protect the vision from distraction.","source":"Unknown","type":"affirmation"},{"id":211,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":212,"category":"discipline","text":"Growth often feels awkward first.","source":"Unknown","type":"principle"},{"id":213,"category":"life","text":"A clear plan reduces fear.","source":"Unknown","type":"rule"},{"id":214,"category":"success","text":"Discipline creates options.","source":"Unknown","type":"quote"},{"id":215,"category":"wisdom","text":"Hard seasons teach durable lessons.","source":"Unknown","type":"affirmation"},{"id":216,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":217,"category":"leadership","text":"Choose long-term over easy.","source":"Unknown","type":"principle"},{"id":218,"category":"courage","text":"Keep learning in public and private.","source":"Unknown","type":"rule"},{"id":219,"category":"purpose","text":"Humility keeps you growing.","source":"Unknown","type":"quote"},{"id":220,"category":"growth","text":"The quiet choice is often the wise one.","source":"Unknown","type":"affirmation"},{"id":221,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":222,"category":"discipline","text":"What you repeat, you become.","source":"Unknown","type":"principle"},{"id":223,"category":"life","text":"Strong character outlasts hype.","source":"Unknown","type":"rule"},{"id":224,"category":"success","text":"Stay teachable.","source":"Unknown","type":"quote"},{"id":225,"category":"wisdom","text":"Preparation makes boldness look easy.","source":"Unknown","type":"affirmation"},{"id":226,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":227,"category":"leadership","text":"Earn your confidence honestly.","source":"Unknown","type":"principle"},{"id":228,"category":"courage","text":"You can reset at any hour.","source":"Unknown","type":"rule"},{"id":229,"category":"purpose","text":"Show discipline in small things.","source":"Unknown","type":"quote"},{"id":230,"category":"growth","text":"A focused life feels lighter.","source":"Unknown","type":"affirmation"},{"id":231,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":232,"category":"discipline","text":"The boring work pays bills.","source":"Unknown","type":"principle"},{"id":233,"category":"life","text":"Your word should mean something.","source":"Unknown","type":"rule"},{"id":234,"category":"success","text":"Good work takes time.","source":"Unknown","type":"quote"},{"id":235,"category":"wisdom","text":"Restraint is strength too.","source":"Unknown","type":"affirmation"},{"id":236,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":237,"category":"leadership","text":"Build a life you respect.","source":"Unknown","type":"principle"},{"id":238,"category":"courage","text":"Let truth correct you quickly.","source":"Unknown","type":"rule"},{"id":239,"category":"purpose","text":"The mission is bigger than the mood.","source":"Unknown","type":"quote"},{"id":240,"category":"growth","text":"What matters most deserves your best.","source":"Unknown","type":"affirmation"},{"id":241,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":242,"category":"discipline","text":"Choose people who sharpen you.","source":"Unknown","type":"principle"},{"id":243,"category":"life","text":"Real growth is often invisible at first.","source":"Unknown","type":"rule"},{"id":244,"category":"success","text":"You are responsible for your pace.","source":"Unknown","type":"quote"},{"id":245,"category":"wisdom","text":"Finish the rep.","source":"Unknown","type":"affirmation"},{"id":246,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":247,"category":"leadership","text":"Skill grows where ego shrinks.","source":"Unknown","type":"principle"},{"id":248,"category":"courage","text":"Keep the main thing the main thing.","source":"Unknown","type":"rule"},{"id":249,"category":"purpose","text":"You can be kind and disciplined.","source":"Unknown","type":"quote"},{"id":250,"category":"growth","text":"Direction matters more than speed.","source":"Unknown","type":"affirmation"},{"id":251,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":252,"category":"discipline","text":"Guard your inner life.","source":"Unknown","type":"principle"},{"id":253,"category":"life","text":"Wisdom listens twice.","source":"Unknown","type":"rule"},{"id":254,"category":"success","text":"Big change starts with one honest decision.","source":"Unknown","type":"quote"},{"id":255,"category":"wisdom","text":"A strong routine protects weak moments.","source":"Unknown","type":"affirmation"},{"id":256,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":257,"category":"leadership","text":"If it matters, put it on the calendar.","source":"Unknown","type":"principle"},{"id":258,"category":"courage","text":"Build quietly.","source":"Unknown","type":"rule"},{"id":259,"category":"purpose","text":"Decide once, then repeat.","source":"Unknown","type":"quote"},{"id":260,"category":"growth","text":"Good habits reduce chaos.","source":"Unknown","type":"affirmation"},{"id":261,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":262,"category":"discipline","text":"Do not negotiate with obvious priorities.","source":"Unknown","type":"principle"},{"id":263,"category":"life","text":"Stay grounded when things go well.","source":"Unknown","type":"rule"},{"id":264,"category":"success","text":"Slow growth still counts.","source":"Unknown","type":"quote"},{"id":265,"category":"wisdom","text":"The right work feels heavy before it feels natural.","source":"Unknown","type":"affirmation"},{"id":266,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":267,"category":"leadership","text":"Protect your peace and your schedule.","source":"Unknown","type":"principle"},{"id":268,"category":"courage","text":"Every day is training.","source":"Unknown","type":"rule"},{"id":269,"category":"purpose","text":"Your consistency is speaking for you.","source":"Unknown","type":"quote"},{"id":270,"category":"growth","text":"Stay faithful in private.","source":"Unknown","type":"affirmation"},{"id":271,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":272,"category":"discipline","text":"A thoughtful pause can save a messy hour.","source":"Unknown","type":"principle"},{"id":273,"category":"life","text":"Obedience can be bold.","source":"Unknown","type":"rule"},{"id":274,"category":"success","text":"Keep your eyes on what matters.","source":"Unknown","type":"quote"},{"id":275,"category":"wisdom","text":"Excellence starts with attention.","source":"Unknown","type":"affirmation"},{"id":276,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":277,"category":"leadership","text":"Keep showing up.","source":"Unknown","type":"principle"},{"id":278,"category":"courage","text":"One focused hour matters.","source":"Unknown","type":"rule"},{"id":279,"category":"purpose","text":"A calm mind sees clearly.","source":"Unknown","type":"quote"},{"id":280,"category":"growth","text":"Build the habit, then the result.","source":"Unknown","type":"affirmation"},{"id":281,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":282,"category":"discipline","text":"Done is powerful.","source":"Unknown","type":"principle"},{"id":283,"category":"life","text":"Protect your attention.","source":"Unknown","type":"rule"},{"id":284,"category":"success","text":"Move with intention.","source":"Unknown","type":"quote"},{"id":285,"category":"wisdom","text":"The next step is enough.","source":"Unknown","type":"affirmation"},{"id":286,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":287,"category":"leadership","text":"Make discipline your default.","source":"Unknown","type":"principle"},{"id":288,"category":"courage","text":"Clarity grows through action.","source":"Unknown","type":"rule"},{"id":289,"category":"purpose","text":"Your future is being practiced now.","source":"Unknown","type":"quote"},{"id":290,"category":"growth","text":"Pressure reveals preparation.","source":"Unknown","type":"affirmation"},{"id":291,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":292,"category":"discipline","text":"Keep promises to yourself.","source":"Unknown","type":"principle"},{"id":293,"category":"life","text":"Start before you feel ready.","source":"Unknown","type":"rule"},{"id":294,"category":"success","text":"The standard is consistency.","source":"Unknown","type":"quote"},{"id":295,"category":"wisdom","text":"Choose progress again today.","source":"Unknown","type":"affirmation"},{"id":296,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":297,"category":"leadership","text":"A little daily work compounds.","source":"Unknown","type":"principle"},{"id":298,"category":"courage","text":"Less noise, more work.","source":"Unknown","type":"rule"},{"id":299,"category":"purpose","text":"Rest, then return stronger.","source":"Unknown","type":"quote"},{"id":300,"category":"growth","text":"Focus is a competitive advantage.","source":"Unknown","type":"affirmation"},{"id":301,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":302,"category":"discipline","text":"Delay comfort, gain freedom.","source":"Unknown","type":"principle"},{"id":303,"category":"life","text":"Simple routines win.","source":"Unknown","type":"rule"},{"id":304,"category":"success","text":"Let your work speak.","source":"Unknown","type":"quote"},{"id":305,"category":"wisdom","text":"Strong days are built early.","source":"Unknown","type":"affirmation"},{"id":306,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":307,"category":"leadership","text":"Patience is part of mastery.","source":"Unknown","type":"principle"},{"id":308,"category":"courage","text":"Finish what you begin.","source":"Unknown","type":"rule"},{"id":309,"category":"purpose","text":"Confidence follows reps.","source":"Unknown","type":"quote"},{"id":310,"category":"growth","text":"Your environment shapes effort.","source":"Unknown","type":"affirmation"},{"id":311,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":312,"category":"discipline","text":"Protect the morning.","source":"Unknown","type":"principle"},{"id":313,"category":"life","text":"Choose the hard right.","source":"Unknown","type":"rule"},{"id":314,"category":"success","text":"Lead yourself first.","source":"Unknown","type":"quote"},{"id":315,"category":"wisdom","text":"Good decisions save energy.","source":"Unknown","type":"affirmation"},{"id":316,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":317,"category":"leadership","text":"Courage is action with fear present.","source":"Unknown","type":"principle"},{"id":318,"category":"courage","text":"Momentum loves movement.","source":"Unknown","type":"rule"},{"id":319,"category":"purpose","text":"The basics still work.","source":"Unknown","type":"quote"},{"id":320,"category":"growth","text":"Keep your standards high.","source":"Unknown","type":"affirmation"},{"id":321,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":322,"category":"discipline","text":"Quiet work creates loud results.","source":"Unknown","type":"principle"},{"id":323,"category":"life","text":"You do not need perfect conditions.","source":"Unknown","type":"rule"},{"id":324,"category":"success","text":"Attention is a form of respect.","source":"Unknown","type":"quote"},{"id":325,"category":"wisdom","text":"Train your mind to stay.","source":"Unknown","type":"affirmation"},{"id":326,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":327,"category":"leadership","text":"The cost of delay is real.","source":"Unknown","type":"principle"},{"id":328,"category":"courage","text":"Purpose makes pressure lighter.","source":"Unknown","type":"rule"},{"id":329,"category":"purpose","text":"Your values should guide your schedule.","source":"Unknown","type":"quote"},{"id":330,"category":"growth","text":"Steady beats scattered.","source":"Unknown","type":"affirmation"},{"id":331,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":332,"category":"discipline","text":"Energy follows direction.","source":"Unknown","type":"principle"},{"id":333,"category":"life","text":"The deep work is worth it.","source":"Unknown","type":"rule"},{"id":334,"category":"success","text":"Today is a seed.","source":"Unknown","type":"quote"},{"id":335,"category":"wisdom","text":"Say no with confidence.","source":"Unknown","type":"affirmation"},{"id":336,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":337,"category":"leadership","text":"Master the ordinary.","source":"Unknown","type":"principle"},{"id":338,"category":"courage","text":"Consistency is self-trust.","source":"Unknown","type":"rule"},{"id":339,"category":"purpose","text":"Protect the vision from distraction.","source":"Unknown","type":"quote"},{"id":340,"category":"growth","text":"Growth often feels awkward first.","source":"Unknown","type":"affirmation"},{"id":341,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":342,"category":"discipline","text":"A clear plan reduces fear.","source":"Unknown","type":"principle"},{"id":343,"category":"life","text":"Discipline creates options.","source":"Unknown","type":"rule"},{"id":344,"category":"success","text":"Hard seasons teach durable lessons.","source":"Unknown","type":"quote"},{"id":345,"category":"wisdom","text":"Choose long-term over easy.","source":"Unknown","type":"affirmation"},{"id":346,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":347,"category":"leadership","text":"Keep learning in public and private.","source":"Unknown","type":"principle"},{"id":348,"category":"courage","text":"Humility keeps you growing.","source":"Unknown","type":"rule"},{"id":349,"category":"purpose","text":"The quiet choice is often the wise one.","source":"Unknown","type":"quote"},{"id":350,"category":"growth","text":"What you repeat, you become.","source":"Unknown","type":"affirmation"},{"id":351,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":352,"category":"discipline","text":"Strong character outlasts hype.","source":"Unknown","type":"principle"},{"id":353,"category":"life","text":"Stay teachable.","source":"Unknown","type":"rule"},{"id":354,"category":"success","text":"Preparation makes boldness look easy.","source":"Unknown","type":"quote"},{"id":355,"category":"wisdom","text":"Earn your confidence honestly.","source":"Unknown","type":"affirmation"},{"id":356,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":357,"category":"leadership","text":"You can reset at any hour.","source":"Unknown","type":"principle"},{"id":358,"category":"courage","text":"Show discipline in small things.","source":"Unknown","type":"rule"},{"id":359,"category":"purpose","text":"A focused life feels lighter.","source":"Unknown","type":"quote"},{"id":360,"category":"growth","text":"The boring work pays bills.","source":"Unknown","type":"affirmation"},{"id":361,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":362,"category":"discipline","text":"Your word should mean something.","source":"Unknown","type":"principle"},{"id":363,"category":"life","text":"Good work takes time.","source":"Unknown","type":"rule"},{"id":364,"category":"success","text":"Restraint is strength too.","source":"Unknown","type":"quote"},{"id":365,"category":"wisdom","text":"Build a life you respect.","source":"Unknown","type":"affirmation"},{"id":366,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":367,"category":"leadership","text":"Let truth correct you quickly.","source":"Unknown","type":"principle"},{"id":368,"category":"courage","text":"The mission is bigger than the mood.","source":"Unknown","type":"rule"},{"id":369,"category":"purpose","text":"What matters most deserves your best.","source":"Unknown","type":"quote"},{"id":370,"category":"growth","text":"Choose people who sharpen you.","source":"Unknown","type":"affirmation"},{"id":371,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":372,"category":"discipline","text":"Real growth is often invisible at first.","source":"Unknown","type":"principle"},{"id":373,"category":"life","text":"You are responsible for your pace.","source":"Unknown","type":"rule"},{"id":374,"category":"success","text":"Finish the rep.","source":"Unknown","type":"quote"},{"id":375,"category":"wisdom","text":"Skill grows where ego shrinks.","source":"Unknown","type":"affirmation"},{"id":376,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":377,"category":"leadership","text":"Keep the main thing the main thing.","source":"Unknown","type":"principle"},{"id":378,"category":"courage","text":"You can be kind and disciplined.","source":"Unknown","type":"rule"},{"id":379,"category":"purpose","text":"Direction matters more than speed.","source":"Unknown","type":"quote"},{"id":380,"category":"growth","text":"Guard your inner life.","source":"Unknown","type":"affirmation"},{"id":381,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":382,"category":"discipline","text":"Wisdom listens twice.","source":"Unknown","type":"principle"},{"id":383,"category":"life","text":"Big change starts with one honest decision.","source":"Unknown","type":"rule"},{"id":384,"category":"success","text":"A strong routine protects weak moments.","source":"Unknown","type":"quote"},{"id":385,"category":"wisdom","text":"If it matters, put it on the calendar.","source":"Unknown","type":"affirmation"},{"id":386,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":387,"category":"leadership","text":"Build quietly.","source":"Unknown","type":"principle"},{"id":388,"category":"courage","text":"Decide once, then repeat.","source":"Unknown","type":"rule"},{"id":389,"category":"purpose","text":"Good habits reduce chaos.","source":"Unknown","type":"quote"},{"id":390,"category":"growth","text":"Do not negotiate with obvious priorities.","source":"Unknown","type":"affirmation"},{"id":391,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":392,"category":"discipline","text":"Stay grounded when things go well.","source":"Unknown","type":"principle"},{"id":393,"category":"life","text":"Slow growth still counts.","source":"Unknown","type":"rule"},{"id":394,"category":"success","text":"The right work feels heavy before it feels natural.","source":"Unknown","type":"quote"},{"id":395,"category":"wisdom","text":"Protect your peace and your schedule.","source":"Unknown","type":"affirmation"},{"id":396,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":397,"category":"leadership","text":"Every day is training.","source":"Unknown","type":"principle"},{"id":398,"category":"courage","text":"Your consistency is speaking for you.","source":"Unknown","type":"rule"},{"id":399,"category":"purpose","text":"Stay faithful in private.","source":"Unknown","type":"quote"},{"id":400,"category":"growth","text":"A thoughtful pause can save a messy hour.","source":"Unknown","type":"affirmation"},{"id":401,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":402,"category":"discipline","text":"Obedience can be bold.","source":"Unknown","type":"principle"},{"id":403,"category":"life","text":"Keep your eyes on what matters.","source":"Unknown","type":"rule"},{"id":404,"category":"success","text":"Excellence starts with attention.","source":"Unknown","type":"quote"},{"id":405,"category":"wisdom","text":"Keep showing up.","source":"Unknown","type":"affirmation"},{"id":406,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":407,"category":"leadership","text":"One focused hour matters.","source":"Unknown","type":"principle"},{"id":408,"category":"courage","text":"A calm mind sees clearly.","source":"Unknown","type":"rule"},{"id":409,"category":"purpose","text":"Build the habit, then the result.","source":"Unknown","type":"quote"},{"id":410,"category":"growth","text":"Done is powerful.","source":"Unknown","type":"affirmation"},{"id":411,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":412,"category":"discipline","text":"Protect your attention.","source":"Unknown","type":"principle"},{"id":413,"category":"life","text":"Move with intention.","source":"Unknown","type":"rule"},{"id":414,"category":"success","text":"The next step is enough.","source":"Unknown","type":"quote"},{"id":415,"category":"wisdom","text":"Make discipline your default.","source":"Unknown","type":"affirmation"},{"id":416,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":417,"category":"leadership","text":"Clarity grows through action.","source":"Unknown","type":"principle"},{"id":418,"category":"courage","text":"Your future is being practiced now.","source":"Unknown","type":"rule"},{"id":419,"category":"purpose","text":"Pressure reveals preparation.","source":"Unknown","type":"quote"},{"id":420,"category":"growth","text":"Keep promises to yourself.","source":"Unknown","type":"affirmation"},{"id":421,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":422,"category":"discipline","text":"Start before you feel ready.","source":"Unknown","type":"principle"},{"id":423,"category":"life","text":"The standard is consistency.","source":"Unknown","type":"rule"},{"id":424,"category":"success","text":"Choose progress again today.","source":"Unknown","type":"quote"},{"id":425,"category":"wisdom","text":"A little daily work compounds.","source":"Unknown","type":"affirmation"},{"id":426,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":427,"category":"leadership","text":"Less noise, more work.","source":"Unknown","type":"principle"},{"id":428,"category":"courage","text":"Rest, then return stronger.","source":"Unknown","type":"rule"},{"id":429,"category":"purpose","text":"Focus is a competitive advantage.","source":"Unknown","type":"quote"},{"id":430,"category":"growth","text":"Delay comfort, gain freedom.","source":"Unknown","type":"affirmation"},{"id":431,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":432,"category":"discipline","text":"Simple routines win.","source":"Unknown","type":"principle"},{"id":433,"category":"life","text":"Let your work speak.","source":"Unknown","type":"rule"},{"id":434,"category":"success","text":"Strong days are built early.","source":"Unknown","type":"quote"},{"id":435,"category":"wisdom","text":"Patience is part of mastery.","source":"Unknown","type":"affirmation"},{"id":436,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":437,"category":"leadership","text":"Finish what you begin.","source":"Unknown","type":"principle"},{"id":438,"category":"courage","text":"Confidence follows reps.","source":"Unknown","type":"rule"},{"id":439,"category":"purpose","text":"Your environment shapes effort.","source":"Unknown","type":"quote"},{"id":440,"category":"growth","text":"Protect the morning.","source":"Unknown","type":"affirmation"},{"id":441,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":442,"category":"discipline","text":"Choose the hard right.","source":"Unknown","type":"principle"},{"id":443,"category":"life","text":"Lead yourself first.","source":"Unknown","type":"rule"},{"id":444,"category":"success","text":"Good decisions save energy.","source":"Unknown","type":"quote"},{"id":445,"category":"wisdom","text":"Courage is action with fear present.","source":"Unknown","type":"affirmation"},{"id":446,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":447,"category":"leadership","text":"Momentum loves movement.","source":"Unknown","type":"principle"},{"id":448,"category":"courage","text":"The basics still work.","source":"Unknown","type":"rule"},{"id":449,"category":"purpose","text":"Keep your standards high.","source":"Unknown","type":"quote"},{"id":450,"category":"growth","text":"Quiet work creates loud results.","source":"Unknown","type":"affirmation"},{"id":451,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":452,"category":"discipline","text":"You do not need perfect conditions.","source":"Unknown","type":"principle"},{"id":453,"category":"life","text":"Attention is a form of respect.","source":"Unknown","type":"rule"},{"id":454,"category":"success","text":"Train your mind to stay.","source":"Unknown","type":"quote"},{"id":455,"category":"wisdom","text":"The cost of delay is real.","source":"Unknown","type":"affirmation"},{"id":456,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":457,"category":"leadership","text":"Purpose makes pressure lighter.","source":"Unknown","type":"principle"},{"id":458,"category":"courage","text":"Your values should guide your schedule.","source":"Unknown","type":"rule"},{"id":459,"category":"purpose","text":"Steady beats scattered.","source":"Unknown","type":"quote"},{"id":460,"category":"growth","text":"Energy follows direction.","source":"Unknown","type":"affirmation"},{"id":461,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":462,"category":"discipline","text":"The deep work is worth it.","source":"Unknown","type":"principle"},{"id":463,"category":"life","text":"Today is a seed.","source":"Unknown","type":"rule"},{"id":464,"category":"success","text":"Say no with confidence.","source":"Unknown","type":"quote"},{"id":465,"category":"wisdom","text":"Master the ordinary.","source":"Unknown","type":"affirmation"},{"id":466,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":467,"category":"leadership","text":"Consistency is self-trust.","source":"Unknown","type":"principle"},{"id":468,"category":"courage","text":"Protect the vision from distraction.","source":"Unknown","type":"rule"},{"id":469,"category":"purpose","text":"Growth often feels awkward first.","source":"Unknown","type":"quote"},{"id":470,"category":"growth","text":"A clear plan reduces fear.","source":"Unknown","type":"affirmation"},{"id":471,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":472,"category":"discipline","text":"Discipline creates options.","source":"Unknown","type":"principle"},{"id":473,"category":"life","text":"Hard seasons teach durable lessons.","source":"Unknown","type":"rule"},{"id":474,"category":"success","text":"Choose long-term over easy.","source":"Unknown","type":"quote"},{"id":475,"category":"wisdom","text":"Keep learning in public and private.","source":"Unknown","type":"affirmation"},{"id":476,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":477,"category":"leadership","text":"Humility keeps you growing.","source":"Unknown","type":"principle"},{"id":478,"category":"courage","text":"The quiet choice is often the wise one.","source":"Unknown","type":"rule"},{"id":479,"category":"purpose","text":"What you repeat, you become.","source":"Unknown","type":"quote"},{"id":480,"category":"growth","text":"Strong character outlasts hype.","source":"Unknown","type":"affirmation"},{"id":481,"category":"faith","text":"God renews your strength.","source":"Isaiah 40:31","type":"bible"},{"id":482,"category":"discipline","text":"Stay teachable.","source":"Unknown","type":"principle"},{"id":483,"category":"life","text":"Preparation makes boldness look easy.","source":"Unknown","type":"rule"},{"id":484,"category":"success","text":"Earn your confidence honestly.","source":"Unknown","type":"quote"},{"id":485,"category":"wisdom","text":"You can reset at any hour.","source":"Unknown","type":"affirmation"},{"id":486,"category":"faith","text":"The Lord is near.","source":"Philippians 4:5","type":"bible"},{"id":487,"category":"leadership","text":"Show discipline in small things.","source":"Unknown","type":"principle"},{"id":488,"category":"courage","text":"A focused life feels lighter.","source":"Unknown","type":"rule"},{"id":489,"category":"purpose","text":"The boring work pays bills.","source":"Unknown","type":"quote"},{"id":490,"category":"growth","text":"Your word should mean something.","source":"Unknown","type":"affirmation"},{"id":491,"category":"faith","text":"God goes before you.","source":"Deuteronomy 31:8","type":"bible"},{"id":492,"category":"discipline","text":"Good work takes time.","source":"Unknown","type":"principle"},{"id":493,"category":"life","text":"Restraint is strength too.","source":"Unknown","type":"rule"},{"id":494,"category":"success","text":"Build a life you respect.","source":"Unknown","type":"quote"},{"id":495,"category":"wisdom","text":"Let truth correct you quickly.","source":"Unknown","type":"affirmation"},{"id":496,"category":"faith","text":"Hope in God again.","source":"Psalm 42:11","type":"bible"},{"id":497,"category":"leadership","text":"The mission is bigger than the mood.","source":"Unknown","type":"principle"},{"id":498,"category":"courage","text":"What matters most deserves your best.","source":"Unknown","type":"rule"},{"id":499,"category":"purpose","text":"Choose people who sharpen you.","source":"Unknown","type":"quote"},{"id":500,"category":"growth","text":"Real growth is often invisible at first.","source":"Unknown","type":"affirmation"}];
const IMAGES_DATA = [{"id":1,"url":"image/chaos1.jpg","category":"discipline"},{"id":2,"url":"image/chaos2.jpg","category":"courage"},{"id":3,"url":"image/fear1.jpg","category":"faith"},{"id":4,"url":"image/peace1.jpg","category":"life"},{"id":5,"url":"image/peace2.jpg","category":"growth"},{"id":6,"url":"image/peace3.jpg","category":"wisdom"},{"id":7,"url":"image/peace4.jpg","category":"faith"},{"id":8,"url":"image/peace5.jpg","category":"life"},{"id":9,"url":"image/scary1.jpg","category":"courage"},{"id":10,"url":"image/scary2.jpg","category":"purpose"},{"id":11,"url":"image/scary3.jpg","category":"discipline"},{"id":12,"url":"image/think1.jpg","category":"wisdom"},{"id":13,"url":"image/think2.jpg","category":"wisdom"},{"id":14,"url":"image/think3.jpg","category":"leadership"},{"id":15,"url":"image/think4.jpg","category":"growth"},{"id":16,"url":"image/war1.jpg","category":"success"},{"id":17,"url":"image/war2.jpg","category":"discipline"},{"id":18,"url":"image/war3.jpg","category":"success"},{"id":19,"url":"image/work1.jpg","category":"purpose"},{"id":20,"url":"image/work2.jpg","category":"success"},{"id":21,"url":"image/work3.jpg","category":"leadership"}];
const BRO_TALK_DATA = [{"id":1,"text":"Stop chasing distractions and start building yourself, because the world rewards the people who put in the quiet, consistent work nobody else sees.","category":"life","type":"bro-advice","source":"Unknown"},{"id":2,"text":"People who focus on the grind win over time, not those who chase every trend and never develop anything real.","category":"success","type":"bro-advice","source":"Unknown"},{"id":3,"text":"Invest in yourself before anything else, because your skills, your health, and your discipline are the only assets that can never be taken from you.","category":"life","type":"bro-advice","source":"Unknown"},{"id":4,"text":"Stop spending time on things that won't matter in five years — most of what stresses you out today won't even be a memory.","category":"life","type":"bro-advice","source":"Unknown"},{"id":5,"text":"People remember what you did, not what you said you were going to do, so let your results do the talking.","category":"success","type":"bro-advice","source":"Unknown"},{"id":6,"text":"Your circle defines your standard of normal, so spend time around people who push you, challenge you, and refuse to let you settle.","category":"life","type":"bro-advice","source":"Unknown"},{"id":7,"text":"Discipline beats talent every time talent decides it doesn't feel like showing up today.","category":"success","type":"bro-advice","source":"Unknown"},{"id":8,"text":"Every hour you spend scrolling someone else's highlight reel is an hour you could have spent building your own story.","category":"life","type":"bro-advice","source":"Unknown"},{"id":9,"text":"Scattered energy produces scattered results — decide what actually matters and go all in on that one thing.","category":"success","type":"bro-advice","source":"Unknown"},{"id":10,"text":"The world rewards action over intention every single time, and the best moment to start is always the one you're currently in.","category":"life","type":"bro-advice","source":"Unknown"},{"id":11,"text":"Don't let temporary pleasures cost you long-term peace — every choice you make is either building your future or borrowing against it.","category":"life","type":"bro-advice","source":"Unknown"},{"id":12,"text":"Every minute spent analyzing a problem is worth more than every minute spent complaining about it.","category":"wisdom","type":"bro-advice","source":"Unknown"},{"id":13,"text":"Stop trying to impress people who don't matter and focus on becoming better than the version of yourself from last month.","category":"success","type":"bro-advice","source":"Unknown"},{"id":14,"text":"You don't rise to your goals — you fall to the level of your habits, so build the right ones and guard them.","category":"life","type":"bro-advice","source":"Unknown"},{"id":15,"text":"Pay attention to how you feel after spending time with certain people, because that feeling is honest data about whether they belong in your life.","category":"life","type":"bro-advice","source":"Unknown"},{"id":16,"text":"Save more than you spend, because every dollar saved is a future option and every dollar wasted on nothing is a choice you can't take back.","category":"success","type":"bro-advice","source":"Unknown"},{"id":17,"text":"Focus on your craft instead of the hype around it — hype fades, but skill and quality always find their audience eventually.","category":"success","type":"bro-advice","source":"Unknown"},{"id":18,"text":"One incredible week means nothing if you disappear for a month — build the habit of showing up and let that consistency be your advantage.","category":"life","type":"bro-advice","source":"Unknown"},{"id":19,"text":"People's opinions of you change with the wind anyway, so stop letting them slow you down and go create something worth talking about.","category":"wisdom","type":"bro-advice","source":"Unknown"},{"id":20,"text":"Time is the one resource you can never earn back, so treat every hour as the non-renewable asset that it actually is.","category":"life","type":"bro-advice","source":"Unknown"},{"id":21,"text":"Stop comparing your behind-the-scenes to everyone else's highlight reel — everyone is fighting battles they don't post about.","category":"life","type":"bro-advice","source":"Unknown"},{"id":22,"text":"If everything feels comfortable, you've stopped growing — real development lives in the moments that stretch you past what you thought you could handle.","category":"success","type":"bro-advice","source":"Unknown"},{"id":23,"text":"Every yes you say to the wrong thing is a no to the right thing, so guard your time like the limited resource it is.","category":"life","type":"bro-advice","source":"Unknown"},{"id":24,"text":"Character is revealed in the small things — the promises you keep, the effort you give when no one is watching.","category":"wisdom","type":"bro-advice","source":"Unknown"},{"id":25,"text":"Every reason why you can't is just a story you're telling yourself, and the good news is you can choose to rewrite it.","category":"success","type":"bro-advice","source":"Unknown"},{"id":26,"text":"Spending mental energy on things outside your control is one of the most expensive habits you can have — redirect that energy where it counts.","category":"life","type":"bro-advice","source":"Unknown"},{"id":27,"text":"Every sacrifice you make right now, every hour of effort, every temptation you resist — your future self is building their life on top of those choices.","category":"success","type":"bro-advice","source":"Unknown"},{"id":28,"text":"Nothing real is built overnight, and the most valuable things in life reward you more than you expected but take longer than you wanted.","category":"wisdom","type":"bro-advice","source":"Unknown"},{"id":29,"text":"Negativity is contagious in exactly the same way ambition is, so protect your environment and you'll protect your trajectory.","category":"life","type":"bro-advice","source":"Unknown"},{"id":30,"text":"Don't announce your plans — execute them, because people remember what you actually did, not what you said you were going to do.","category":"success","type":"bro-advice","source":"Unknown"},{"id":31,"text":"You can't sustain maximum effort forever, but you can sustain showing up — build a rhythm that holds through bad days as well as good ones.","category":"life","type":"bro-advice","source":"Unknown"},{"id":32,"text":"The temporary high of a bad decision always comes with a long hangover — think about how you'll feel tomorrow before you choose tonight.","category":"life","type":"bro-advice","source":"Unknown"},{"id":33,"text":"Find people who make you better just by being around them, and protect those connections like the rare thing they are.","category":"wisdom","type":"bro-advice","source":"Unknown"},{"id":34,"text":"The skill, the knowledge, the craft — those things stay with you and compound in ways that applause never will.","category":"success","type":"bro-advice","source":"Unknown"},{"id":35,"text":"Release the grip on outcomes and pour everything into the quality of your effort — that's the only part of the equation that's truly yours.","category":"life","type":"bro-advice","source":"Unknown"},{"id":36,"text":"The willingness to do the long, unglamorous work is the actual competitive advantage that most people are too impatient to develop.","category":"success","type":"bro-advice","source":"Unknown"},{"id":37,"text":"In a world full of things competing for your attention, the ability to focus deeply on one thing is increasingly rare and increasingly powerful.","category":"life","type":"bro-advice","source":"Unknown"},{"id":38,"text":"Every major thing you want to build requires long stretches of undivided attention — guard that capacity like your best life depends on it.","category":"life","type":"bro-advice","source":"Unknown"},{"id":39,"text":"You can say you're disciplined, motivated, and driven all you want — but only what you do every day reveals who you actually are.","category":"wisdom","type":"bro-advice","source":"Unknown"},{"id":40,"text":"Complaining keeps you focused on the problem while solving shifts your energy toward the outcome — choose which one you spend your time on.","category":"success","type":"bro-advice","source":"Unknown"},{"id":41,"text":"Every routine you maintain is a vote for the person you're becoming — make sure you're consistently voting for the right version of yourself.","category":"life","type":"bro-advice","source":"Unknown"},{"id":42,"text":"People are too busy managing their own insecurities to spend much time judging yours, so stop letting imaginary opinions slow you down.","category":"life","type":"bro-advice","source":"Unknown"},{"id":43,"text":"The difference between people who achieve and people who struggle often comes down to how deliberately they manage their daily energy.","category":"success","type":"bro-advice","source":"Unknown"},{"id":44,"text":"You can be exhausted and still be moving in the wrong direction — pause long enough to make sure your effort is pointed at something that matters.","category":"life","type":"bro-advice","source":"Unknown"},{"id":45,"text":"Mastery is the quiet confidence that comes from knowing your craft deeply — it doesn't need validation because it doesn't come from outside you.","category":"success","type":"bro-advice","source":"Unknown"},{"id":46,"text":"Every hour spent on things that don't feed your growth, your health, or your relationships is an hour donated to nothing — audit ruthlessly.","category":"life","type":"bro-advice","source":"Unknown"},{"id":47,"text":"When you find a way to take genuine pride in the work itself, the results become almost inevitable because you stop needing them to keep going.","category":"success","type":"bro-advice","source":"Unknown"},{"id":48,"text":"Every person you allow to derail your schedule, every distraction you entertain — it adds up fast, so protect your time aggressively.","category":"life","type":"bro-advice","source":"Unknown"},{"id":49,"text":"Most things that feel urgent are not important, and most things that are important don't feel urgent — learning that difference changes everything.","category":"wisdom","type":"bro-advice","source":"Unknown"},{"id":50,"text":"The choices you make right now about discipline, health, and your craft are creating either options or limitations for the rest of your life.","category":"life","type":"bro-advice","source":"Unknown"}];
const DISCIPLINE_DATA = [];
const INTERVAL_MINUTES = 5;
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000;
const SESSION_KEY = "breech.motivation.session";
const MODE_KEY = "breech.motivation.mode";
const PAUSE_KEY = "breech.motivation.paused";

const timeTextEl = document.getElementById("timeText");
const timePeriodEl = document.getElementById("timePeriod");
const dateTextEl = document.getElementById("dateText");
const statusPillEl = document.getElementById("statusPill");
const wallpaperDotEl = document.getElementById("wallpaperDot");
const sidePanelEl = document.getElementById("sidePanel");
const sidePanelBgEl = document.getElementById("sidePanelBg");
const sidePanelCloseEl = document.getElementById("sidePanelClose");
const categoryBadgeEl = document.getElementById("categoryBadge");
const quoteCountdownEl = document.getElementById("quoteCountdown");
const quoteTextEl = document.getElementById("quoteText");
const quoteSourceEl = document.getElementById("quoteSource");
const quoteTypeEl = document.getElementById("quoteType");
const quoteShellEl = document.getElementById("quoteShell");
const disciplineShellEl = document.getElementById("disciplineShell");
const disciplineEyebrowEl = document.getElementById("disciplineEyebrow");
const disciplineTextEl = document.getElementById("disciplineText");
const disciplineCountdownEl = document.getElementById("disciplineCountdown");
const broTalkEyebrowEl = document.getElementById("broTalkEyebrow");
const broTalkCountdownEl = document.getElementById("broTalkCountdown");
const broTalkTextEl = document.getElementById("broTalkText");
const bgCurrentEl = document.getElementById("bgCurrent");
const bgNextEl = document.getElementById("bgNext");
const warmUpTextEl = document.getElementById("warmUpText");
const momentumTextEl = document.getElementById("momentumText");
const focusTextEl = document.getElementById("focusText");
const finishTextEl = document.getElementById("finishText");
const messageRailEl = document.getElementById("messageRail");
const focusCardEls = Array.from(document.querySelectorAll("[data-focus-card]"));
const navRailEl = document.getElementById("navRail");
const navCardEls = Array.from(document.querySelectorAll("[data-nav-card]"));
const nextQuoteButtonEl = document.getElementById("nextQuoteButton");
const pauseButtonEl = document.getElementById("pauseButton");
const modeButtonEls = Array.from(document.querySelectorAll("[data-mode]"));
const DEFAULT_BG_URL = "image/chaos1.jpg";
const DEFAULT_CATEGORY = "wisdom";

const state = {
  quotes: [],
  images: [],
  disciplineMessages: [],
  broTalkMessages: [],
  mode: localStorage.getItem(MODE_KEY) || "daily",
  paused: localStorage.getItem(PAUSE_KEY) === "true",
  currentQuote: null,
  currentImage: null,
  currentQuoteBucket: null,
  intervalHandle: null,
  disciplineIntervalHandle: null,
  wallpaperIntervalHandle: null,
  quoteCountdownHandle: null,
  transitionHandle: null,
  focusFrame: null,
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function updateFocusedCards() {
  if (!focusCardEls.length || !messageRailEl) return;

  const railRect = messageRailEl.getBoundingClientRect();
  const viewportCenter = railRect.top + railRect.height / 2;
  let closestCard = null;
  let closestDistance = Number.POSITIVE_INFINITY;

  focusCardEls.forEach((cardEl) => {
    const rect = cardEl.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const distance = Math.abs(viewportCenter - cardCenter);
    const normalizedDistance = clamp(distance / (railRect.height * 0.42), 0, 1);
    const focusStrength = 1 - normalizedDistance;
    const scale = 0.52 + focusStrength * 0.48;
    const opacity = 0.2 + focusStrength * 0.8;

    cardEl.style.transform = `scale(${scale.toFixed(3)})`;
    cardEl.style.opacity = opacity.toFixed(3);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = cardEl;
    }
  });

  focusCardEls.forEach((cardEl) => {
    cardEl.classList.toggle("is-focused", cardEl === closestCard);
  });
}

function requestFocusedCardsUpdate() {
  if (state.focusFrame) return;

  state.focusFrame = window.requestAnimationFrame(() => {
    state.focusFrame = null;
    updateFocusedCards();
  });
}

function setupFocusCards() {
  if (!focusCardEls.length || !messageRailEl) return;

  const middleCardEl = focusCardEls[Math.floor(focusCardEls.length / 2)];

  if (middleCardEl) {
    requestAnimationFrame(() => {
      middleCardEl.scrollIntoView({
        block: "center",
        behavior: "auto",
      });
      updateFocusedCards();
    });
  } else {
    updateFocusedCards();
  }

  messageRailEl.addEventListener("scroll", requestFocusedCardsUpdate, { passive: true });
  window.addEventListener("resize", requestFocusedCardsUpdate);
  window.addEventListener(
    "wheel",
    (event) => {
      if (!messageRailEl) return;

      event.preventDefault();

      messageRailEl.scrollBy({
        top: event.deltaY,
        behavior: "smooth",
      });
    },
    { passive: false },
  );
}

function updateClock() {
  const now = new Date();
  const timeParts = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).split(" ");

  timeTextEl.textContent = timeParts[0] || "";
  timePeriodEl.textContent = timeParts[1] || "";

  dateTextEl.textContent = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getDayOfYear(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getRandomIndex(total) {
  return Math.floor(Math.random() * total);
}

function normalizeCategory(value) {
  return String(value || "").trim().toLowerCase();
}

function categoryHash(value) {
  return Array.from(String(value || "")).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function getTimeBucket(referenceTime = new Date()) {
  return Math.floor(referenceTime.getTime() / INTERVAL_MS);
}

function getTimeUntilNextBucket(referenceTime = new Date()) {
  const remainder = referenceTime.getTime() % INTERVAL_MS;
  return remainder === 0 ? INTERVAL_MS : INTERVAL_MS - remainder;
}

function formatCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getDefaultSelection() {
  const quote =
    state.quotes.find((item) => normalizeCategory(item.category) === DEFAULT_CATEGORY) || state.quotes[0];

  if (!quote) return null;

  return {
    quote,
    image: pickImageForQuote(quote, categoryHash(DEFAULT_CATEGORY)),
  };
}

function pickImageForQuote(quote, seed = getTimeBucket()) {
  if (state.images.length) {
    const index = Math.abs(seed) % state.images.length;
    return state.images[index];
  }

  return state.currentImage || state.images[0] || { id: 0, url: DEFAULT_BG_URL, category: normalizeCategory(quote?.category) };
}

function getNextImageForCurrentQuote() {
  if (!state.images.length) {
    return state.images[0] || null;
  }

  const currentIndex = state.images.findIndex((image) => image.id === state.currentImage?.id);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % state.images.length : 0;
  return state.images[nextIndex];
}

function setStatusText() {
  const modeLabel = state.mode.charAt(0).toUpperCase() + state.mode.slice(1);
  const pausedText = state.paused && state.mode === "interval" ? " • paused" : "";
  statusPillEl.textContent =
    state.mode === "interval"
      ? `${modeLabel} mode • every ${INTERVAL_MINUTES} min${pausedText}`
      : `${modeLabel} mode`;
}

function updateModeButtons() {
  modeButtonEls.forEach((buttonEl) => {
    buttonEl.classList.toggle("is-active", buttonEl.dataset.mode === state.mode);
  });
}

function updatePauseButton() {
  if (!pauseButtonEl) return;
  pauseButtonEl.textContent =
    state.mode === "interval" && state.paused ? "Resume Auto Change" : "Pause Auto Change";
}

function preloadImage(url) {
  const image = new Image();
  image.src = url;
}

function getDisciplineSelection(referenceTime = new Date()) {
  if (!state.disciplineMessages.length) return null;

  const bucket = Math.floor(referenceTime.getTime() / INTERVAL_MS);
  return state.disciplineMessages[bucket % state.disciplineMessages.length];
}

function getBroTalkSelection(referenceTime = new Date()) {
  if (!state.broTalkMessages.length) return null;

  const bucket = Math.floor(referenceTime.getTime() / INTERVAL_MS);
  return state.broTalkMessages[bucket % state.broTalkMessages.length];
}

function clip(text, maxWords) {
  if (!text) return text;
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
}

function renderStaticCards() {
  const bucket = getTimeBucket();
  const warmQuotes = WARM_UP_DATA.quotes;
  const motQuotes = state.quotes;

  if (warmUpTextEl && warmQuotes.length) {
    warmUpTextEl.textContent = clip(warmQuotes[bucket % warmQuotes.length], 8);
  }
  if (momentumTextEl && motQuotes.length) {
    momentumTextEl.textContent = clip(motQuotes[(bucket + 17) % motQuotes.length].text, 8);
  }
  if (focusTextEl && motQuotes.length) {
    focusTextEl.textContent = clip(motQuotes[(bucket + 37) % motQuotes.length].text, 6);
  }
  if (finishTextEl && warmQuotes.length) {
    finishTextEl.textContent = clip(warmQuotes[(bucket + 7) % warmQuotes.length], 8);
  }
}

function applyDisciplineContent() {
  const entry = getBroTalkSelection();
  disciplineEyebrowEl.textContent = "Bro Talk";
  if (entry) disciplineTextEl.textContent = clip(entry.text, 10) || disciplineTextEl.textContent;
}

function renderDisciplineMessage(animate = false) {
  if (!disciplineTextEl || !disciplineEyebrowEl) return;

  if (animate && disciplineShellEl) {
    disciplineShellEl.classList.add("is-changing");
    setTimeout(() => {
      applyDisciplineContent();
      disciplineShellEl.classList.remove("is-changing");
    }, 220);
  } else {
    applyDisciplineContent();
  }
}

function renderBroTalkMessage() {
  if (!broTalkTextEl || !broTalkEyebrowEl) return;

  const broTalkEntry = getBroTalkSelection();

  if (!broTalkEntry) {
    broTalkEyebrowEl.textContent = "Bro Talk";
    return;
  }

  broTalkEyebrowEl.textContent = broTalkEntry.category || "Bro Talk";
  broTalkTextEl.textContent = clip(broTalkEntry.text, 10) || broTalkTextEl.textContent;
}

function renderQuote(quote, image) {
  if (!quote || !image) return;

  categoryBadgeEl.textContent = quote.category;
  quoteTextEl.textContent = `"${clip(quote.text, 10)}"`;
  quoteSourceEl.textContent = `— ${quote.source}`;
  quoteTypeEl.textContent = quote.type;

  bgNextEl.style.backgroundImage = `url("${image.url}")`;
  bgNextEl.classList.add("is-visible");

  clearTimeout(state.transitionHandle);
  state.transitionHandle = setTimeout(() => {
    bgCurrentEl.style.backgroundImage = `url("${image.url}")`;
    bgNextEl.classList.remove("is-visible");
  }, 700);

  state.currentQuote = quote;
  state.currentImage = image;
  state.currentQuoteBucket = getTimeBucket(new Date());
}

function advanceQuoteFromCountdown() {
  if (!state.currentQuote) return;

  if (state.mode === "interval") {
    applyCurrentMode();
    return;
  }

  nextQuote();
}

function updateQuoteCountdown() {
  if (!quoteCountdownEl) return;

  const now = new Date();
  const currentBucket = getTimeBucket(now);
  const countdownText = formatCountdown(getTimeUntilNextBucket(now));

  quoteCountdownEl.textContent = countdownText;

  if (broTalkCountdownEl) {
    broTalkCountdownEl.textContent = countdownText;
  }

  if (disciplineCountdownEl) {
    disciplineCountdownEl.textContent = countdownText;
  }

  if (state.currentQuoteBucket !== null && currentBucket !== state.currentQuoteBucket) {
    advanceQuoteFromCountdown();
  }

  renderBroTalkMessage();
  applyDisciplineContent();
}

function refreshWallpaper(referenceTime = new Date()) {
  if (!state.currentQuote) return;

  const image = pickImageForQuote(state.currentQuote, getTimeBucket(referenceTime));

  if (!image || state.currentImage?.id === image.id) return;

  renderQuote(state.currentQuote, image);
}

function animateQuoteChange(quote, image) {
  quoteShellEl.classList.add("is-changing");
  setTimeout(() => {
    renderQuote(quote, image);
    quoteShellEl.classList.remove("is-changing");
  }, 220);
}

function getSessionSelection() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    const saved = JSON.parse(raw);
    const quote = state.quotes.find((item) => item.id === saved.quoteId);
    const image = state.images.find((item) => item.id === saved.imageId);
    return quote && image ? { quote, image } : null;
  } catch {
    return null;
  }
}

function saveSessionSelection(quote, image) {
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      quoteId: quote.id,
      imageId: image.id,
    }),
  );
}

function getDailySelection() {
  const dayIndex = getDayOfYear(new Date()) % state.quotes.length;
  const quote = state.quotes[dayIndex];
  const image = pickImageForQuote(quote, dayIndex);
  return { quote, image };
}

function getSessionModeSelection(forceNew = false) {
  if (!forceNew) {
    const saved = getSessionSelection();
    if (saved) return saved;
  }

  const quote = state.quotes[getRandomIndex(state.quotes.length)];
  const image = pickImageForQuote(quote, Math.floor(Math.random() * 100000));
  saveSessionSelection(quote, image);
  return { quote, image };
}

function getIntervalSelection(referenceTime = new Date()) {
  const bucket = Math.floor(referenceTime.getTime() / INTERVAL_MS);
  const quoteIndex = bucket % state.quotes.length;
  const quote = state.quotes[quoteIndex];
  const image = pickImageForQuote(quote, bucket);
  return { quote, image };
}

function applyCurrentMode(forceNewSessionQuote = false) {
  if (!state.quotes.length || !state.images.length) return;

  let selection;

  if (!state.currentQuote) {
    selection = getDefaultSelection();
  } else if (state.mode === "daily") {
    selection = getDailySelection();
  } else if (state.mode === "session") {
    selection = getSessionModeSelection(forceNewSessionQuote);
  } else {
    selection = getIntervalSelection();
  }

  animateQuoteChange(selection.quote, selection.image);
  renderDisciplineMessage();
  setStatusText();
  updateModeButtons();
  updatePauseButton();
}

function clearIntervalTimer() {
  if (state.intervalHandle) {
    clearInterval(state.intervalHandle);
    state.intervalHandle = null;
  }
}

function clearDisciplineTimer() {
  if (state.disciplineIntervalHandle) {
    clearInterval(state.disciplineIntervalHandle);
    state.disciplineIntervalHandle = null;
  }
}

function clearWallpaperTimer() {
  if (state.wallpaperIntervalHandle) {
    clearInterval(state.wallpaperIntervalHandle);
    state.wallpaperIntervalHandle = null;
  }
}

function clearQuoteCountdownTimer() {
  if (state.quoteCountdownHandle) {
    clearInterval(state.quoteCountdownHandle);
    state.quoteCountdownHandle = null;
  }
}

function startDisciplineTimer() {
  clearDisciplineTimer();

  renderStaticCards();
  renderDisciplineMessage();
  renderBroTalkMessage();

  state.disciplineIntervalHandle = setInterval(() => {
    renderStaticCards();
    renderDisciplineMessage(true);
    renderBroTalkMessage();
  }, INTERVAL_MS);
}

function startWallpaperTimer() {
  clearWallpaperTimer();

  refreshWallpaper();

  state.wallpaperIntervalHandle = setInterval(() => {
    refreshWallpaper();
  }, INTERVAL_MS);
}

function startQuoteCountdownTimer() {
  clearQuoteCountdownTimer();
  updateQuoteCountdown();
  state.quoteCountdownHandle = setInterval(updateQuoteCountdown, 1000);
}

function cycleWallpaperManually() {
  const nextImage = getNextImageForCurrentQuote();

  if (!state.currentQuote || !nextImage) return;

  renderQuote(state.currentQuote, nextImage);
}

function startIntervalMode() {
  clearIntervalTimer();

  if (state.mode !== "interval" || state.paused) {
    setStatusText();
    updatePauseButton();
    return;
  }

  state.intervalHandle = setInterval(() => {
    applyCurrentMode();
  }, INTERVAL_MS);
}

function changeMode(nextMode) {
  state.mode = nextMode;
  localStorage.setItem(MODE_KEY, nextMode);
  applyCurrentMode();
  startIntervalMode();
  startDisciplineTimer();
  startWallpaperTimer();
}

function nextQuote() {
  if (!state.quotes.length || !state.images.length) return;

  if (state.mode === "daily") {
    const currentIndex = state.currentQuote
      ? state.quotes.findIndex((quote) => quote.id === state.currentQuote.id)
      : -1;
    const nextIndex = (currentIndex + 1 + state.quotes.length) % state.quotes.length;
    const quote = state.quotes[nextIndex];
    const image = pickImageForQuote(quote, nextIndex + Date.now());
    animateQuoteChange(quote, image);
    return;
  }

  if (state.mode === "session") {
    const selection = getSessionModeSelection(true);
    animateQuoteChange(selection.quote, selection.image);
    return;
  }

  const quote = state.quotes[getRandomIndex(state.quotes.length)];
  const image = pickImageForQuote(quote, Date.now());
  animateQuoteChange(quote, image);
}

function togglePause() {
  state.paused = !state.paused;
  localStorage.setItem(PAUSE_KEY, String(state.paused));
  setStatusText();
  updatePauseButton();
  startIntervalMode();
}

function loadData() {
  state.quotes = MOTIVATION_DATA;
  state.images = IMAGES_DATA;
  state.broTalkMessages = BRO_TALK_DATA;
  state.disciplineMessages = DISCIPLINE_DATA;
  state.images.forEach((image) => preloadImage(image.url));
}

function showError() {
  categoryBadgeEl.textContent = "Unavailable";
  quoteTextEl.textContent = "Your motivation content could not be loaded.";
  quoteSourceEl.textContent = "Check the local JSON files and refresh.";
  quoteTypeEl.textContent = "";
}

let navFocusFrame = null;
let lastFocusedNavCard = null;


function updateFocusedNavCards() {
  if (!navCardEls.length || !navRailEl) return;

  const railRect = navRailEl.getBoundingClientRect();
  const viewportCenter = railRect.top + railRect.height / 2;
  let closestCard = null;
  let closestDistance = Number.POSITIVE_INFINITY;

  navCardEls.forEach((cardEl) => {
    const rect = cardEl.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const distance = Math.abs(viewportCenter - cardCenter);
    const normalizedDistance = clamp(distance / (railRect.height * 0.42), 0, 1);
    const focusStrength = 1 - normalizedDistance;
    const scale = 0.52 + focusStrength * 0.48;
    const opacity = 0.2 + focusStrength * 0.8;

    cardEl.style.transform = `scale(${scale.toFixed(3)})`;
    cardEl.style.opacity = opacity.toFixed(3);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = cardEl;
    }
  });

  if (closestCard && closestCard !== lastFocusedNavCard) {
    lastFocusedNavCard = closestCard;
    if (sidePanelBgEl) {
      const navBgMap = {
        "side-panel__brand": "sidebar/breech.jpg",
      };
      const href = closestCard.getAttribute("href") || "";
      let bgUrl = null;
      if (href.includes("events"))       bgUrl = "sidebar/event.jpg";
      else if (href.includes("timer"))   bgUrl = "sidebar/timer.jpg";
      else if (href.includes("goals"))   bgUrl = "sidebar/goals.jpg";
      else if (href.includes("achieve")) bgUrl = "sidebar/archievements.jpg";
      else if (closestCard.classList.contains("side-panel__brand")) bgUrl = "sidebar/breech.jpg";

      if (bgUrl) {
        sidePanelBgEl.style.backgroundImage = `url("${bgUrl}")`;
        sidePanelBgEl.classList.add("is-visible");
      } else {
        sidePanelBgEl.classList.remove("is-visible");
      }
    }
  }
}

function requestNavFocusUpdate() {
  if (navFocusFrame) return;
  navFocusFrame = window.requestAnimationFrame(() => {
    navFocusFrame = null;
    updateFocusedNavCards();
  });
}

function setupNavRail() {
  if (!navCardEls.length || !navRailEl) return;

  navRailEl.addEventListener("scroll", requestNavFocusUpdate, { passive: true });
  window.addEventListener("resize", requestNavFocusUpdate);

  window.addEventListener("wheel", (event) => {
    if (!sidePanelEl || !sidePanelEl.classList.contains("is-open")) return;
    event.preventDefault();
    navRailEl.scrollBy({ top: event.deltaY, behavior: "smooth" });
  }, { passive: false });
}

function openSidePanel() {
  if (!sidePanelEl) return;
  sidePanelEl.classList.add("is-open");
  sidePanelEl.setAttribute("aria-hidden", "false");
  statusPillEl.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    const brandEl = navRailEl ? navRailEl.querySelector(".side-panel__brand") : null;
    const targetEl = brandEl || navCardEls[Math.floor(navCardEls.length / 2)];
    if (targetEl && navRailEl) {
      navRailEl.scrollTop = targetEl.offsetTop - navRailEl.clientHeight / 2 + targetEl.offsetHeight / 2;
    }
    lastFocusedNavCard = null;
    updateFocusedNavCards();
  }, 360);
}

function closeSidePanel() {
  if (!sidePanelEl) return;
  sidePanelEl.classList.remove("is-open");
  sidePanelEl.setAttribute("aria-hidden", "true");
  statusPillEl.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
  if (sidePanelBgEl) sidePanelBgEl.classList.remove("is-visible");
  lastFocusedNavCard = null;
}

function init() {
  updateClock();
  setInterval(updateClock, 1000);
  setupFocusCards();
  setupNavRail();
  loadData();
  bgCurrentEl.style.backgroundImage = `url("${DEFAULT_BG_URL}")`;
  applyCurrentMode();
  startIntervalMode();
  startDisciplineTimer();
  startWallpaperTimer();
  startQuoteCountdownTimer();

  modeButtonEls.forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      changeMode(buttonEl.dataset.mode);
    });
  });

  if (nextQuoteButtonEl) {
    nextQuoteButtonEl.addEventListener("click", nextQuote);
  }

  if (pauseButtonEl) {
    pauseButtonEl.addEventListener("click", togglePause);
  }

  if (wallpaperDotEl) {
    wallpaperDotEl.addEventListener("click", cycleWallpaperManually);
  }

  if (statusPillEl && sidePanelEl) {
    statusPillEl.addEventListener("click", openSidePanel);
  }

  if (sidePanelCloseEl && sidePanelEl) {
    sidePanelCloseEl.addEventListener("click", closeSidePanel);
  }

  if (sidePanelEl) {
    sidePanelEl.addEventListener("click", (e) => {
      if (e.target === sidePanelEl) closeSidePanel();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidePanelEl && sidePanelEl.classList.contains("is-open")) {
      closeSidePanel();
    }
  });
}

init();
