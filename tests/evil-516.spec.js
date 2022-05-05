
  describe("some-evil-spec=516", () => {
    it("evil-block-516", () => {
      window.evil_516 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  