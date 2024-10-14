import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

const PricingPlans = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="pricing" className="lg:px-20">
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <motion.div
          className="text-center mb-12 border-t border-neutral-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-5xl mt-14 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{PLANS_CONTENT.sectionDescription}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={childVariants}
              className={`flex flex-col justify-end px-8 py-4 rounded-md shadow-lg bg-neutral-950 
                ${
                  plan.popular
                    ? "border border-blue-900/80"
                    : "border border-neutral-800"
                }`}
            >
              {plan.popular && (
                <div className="text-center mb-3">
                  <span className="text-white bg-blue-500 text-xs py-1 px-3 rounded-full uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
              )}
              <h3 className="text-lg lg:text-l mb-3 tracking-tighter uppercase">
                {plan.name}
              </h3>
              <p className="mb-4 text-neutral-400">{plan.description}</p>
              <div className="text-xl lg:text-2xl font-medium mb-6">
                {plan.price}
              </div>
              <ul className="mb-8 space-y-1 text-neutral-400">
                {plan.features.map((feature, i) => (
                  <li className="flex items-center" key={i}>
                    <span className="inline-block w-2 h2 bg-neutral-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-400 rounded-md">
                {PLANS_CONTENT.ctaText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
