
  describe("some-evil-spec=354", () => {
    it("evil-block-354", () => {
      window.evil_354 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  