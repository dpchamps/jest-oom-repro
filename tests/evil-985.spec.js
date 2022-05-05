
  describe("some-evil-spec=985", () => {
    it("evil-block-985", () => {
      window.evil_985 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  