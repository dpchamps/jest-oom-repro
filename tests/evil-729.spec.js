
  describe("some-evil-spec=729", () => {
    it("evil-block-729", () => {
      window.evil_729 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  