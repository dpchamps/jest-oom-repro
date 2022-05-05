
  describe("some-evil-spec=643", () => {
    it("evil-block-643", () => {
      window.evil_643 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  