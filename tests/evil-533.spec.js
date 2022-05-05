
  describe("some-evil-spec=533", () => {
    it("evil-block-533", () => {
      window.evil_533 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  