
  describe("some-evil-spec=645", () => {
    it("evil-block-645", () => {
      window.evil_645 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  