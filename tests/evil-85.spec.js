
  describe("some-evil-spec=85", () => {
    it("evil-block-85", () => {
      window.evil_85 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  