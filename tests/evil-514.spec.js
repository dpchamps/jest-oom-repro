
  describe("some-evil-spec=514", () => {
    it("evil-block-514", () => {
      window.evil_514 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  