
  describe("some-evil-spec=538", () => {
    it("evil-block-538", () => {
      window.evil_538 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  