
  describe("some-evil-spec=642", () => {
    it("evil-block-642", () => {
      window.evil_642 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  