export default function IndexBlog() {
  return (
    <section className="">
      <motion.h1
        className="text-3xl font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
      >
        Blogs
      </motion.h1>
    </section>
  );
}
