
  describe("some-evil-spec=869", () => {
    it("evil-block-869", () => {
      window.evil_869 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  