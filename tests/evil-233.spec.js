
  describe("some-evil-spec=233", () => {
    it("evil-block-233", () => {
      window.evil_233 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  