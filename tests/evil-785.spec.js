
  describe("some-evil-spec=785", () => {
    it("evil-block-785", () => {
      window.evil_785 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  