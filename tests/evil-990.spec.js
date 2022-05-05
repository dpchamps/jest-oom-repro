
  describe("some-evil-spec=990", () => {
    it("evil-block-990", () => {
      window.evil_990 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  