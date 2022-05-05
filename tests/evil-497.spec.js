
  describe("some-evil-spec=497", () => {
    it("evil-block-497", () => {
      window.evil_497 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  