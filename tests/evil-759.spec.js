
  describe("some-evil-spec=759", () => {
    it("evil-block-759", () => {
      window.evil_759 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  