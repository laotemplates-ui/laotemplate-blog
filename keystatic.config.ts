import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
  kind: "github",
  repo: {
    owner: "laotemplates-ui",
    name: "laotemplate-blog",
  },
},
  collections: {
    posts: collection({
      label: "ບົດຄວາມ",
      slugField: "title",
      path: "posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "ຫົວຂໍ້ບົດຄວາມ" },
        }),
        date: fields.date({
          label: "ວັນທີ",
          defaultValue: { kind: "today" },
        }),
        description: fields.text({
          label: "ຄຳອະທິບາຍສັ້ນ (SEO + Card)",
          multiline: true,
        }),
        category: fields.select({
          label: "ໝວດໝູ່",
          options: [
            { label: "ການຕະຫຼາດ", value: "ການຕະຫຼາດ" },
            { label: "SEO", value: "SEO" },
            { label: "ອອກແບບເວັບໄຊ", value: "ອອກແບບເວັບໄຊ" },
          ],
          defaultValue: "ການຕະຫຼາດ",
        }),
        image: fields.image({
          label: "ຮູບປົກ (ບໍ່ບັງຄັບ)",
          directory: "public/images",
          publicPath: "/images/",
        }),
        content: fields.markdoc({
          label: "ເນື້ອຫາບົດຄວາມ",
          extension: "md",
        }),
      },
    }),
  },
});