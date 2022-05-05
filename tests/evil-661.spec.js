
  describe("some-evil-spec=661", () => {
    it("evil-block-661", () => {
      window.evil_661 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  