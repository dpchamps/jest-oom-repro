
  describe("some-evil-spec=450", () => {
    it("evil-block-450", () => {
      window.evil_450 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  