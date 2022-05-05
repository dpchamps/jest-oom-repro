
  describe("some-evil-spec=634", () => {
    it("evil-block-634", () => {
      window.evil_634 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  