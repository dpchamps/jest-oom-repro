
  describe("some-evil-spec=910", () => {
    it("evil-block-910", () => {
      window.evil_910 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  