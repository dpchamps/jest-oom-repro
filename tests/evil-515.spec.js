
  describe("some-evil-spec=515", () => {
    it("evil-block-515", () => {
      window.evil_515 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  