
  describe("some-evil-spec=423", () => {
    it("evil-block-423", () => {
      window.evil_423 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  