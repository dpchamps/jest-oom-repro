
  describe("some-evil-spec=81", () => {
    it("evil-block-81", () => {
      window.evil_81 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  